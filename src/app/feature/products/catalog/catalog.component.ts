import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";
import {tap} from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(private productService:ProductService, private router: Router) { }
  public products: ProductType[] = [];
  loading:boolean = false;
  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
      {
        next: data => {
          this.products = data;
        },
        error: (error) => {
          console.log(error);
          this.router.navigate(['/']);
        }
      })
  }
}
