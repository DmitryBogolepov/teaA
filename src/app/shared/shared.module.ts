import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {RouterModule} from "@angular/router";
import {LengthPipe} from "./pipes/length-pipe.pipe";



@NgModule({
  declarations: [
    ProductCardComponent,
    LengthPipe
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    ProductCardComponent,
    LengthPipe
  ]
})
export class SharedModule { }
