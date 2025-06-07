import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CatalogComponent} from "./catalog/catalog.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {ProductsRoutingModule} from "./products-routing.module";



@NgModule({
  declarations: [
    CatalogComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
