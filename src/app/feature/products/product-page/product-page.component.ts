import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  product: ProductType | null = null;
  loading = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private productService: ProductService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.productService.getProduct(+params['id'])?.subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (error) => {
            this.router.navigate(['/'])
          }
        })
      }
    })
  }
}
