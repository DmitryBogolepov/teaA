import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './pages/main/main.component';
import { OrderComponent } from './pages/order/order.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderComponent,
    CatalogComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
