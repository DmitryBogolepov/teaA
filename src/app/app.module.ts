import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainComponent } from './feature/main/main.component';
import { OrderComponent } from './feature/order/order.component';
import { CatalogComponent } from './feature/products/catalog/catalog.component';
import { ProductPageComponent } from './feature/products/product-page/product-page.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import {ProductService} from "./shared/services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {ProductsModule} from "./feature/products/products.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderComponent,

    HeaderComponent,
    FooterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
        ProductsModule
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
