import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { MainComponent } from './pages/main/main.component';
import { OrderComponent } from './pages/order/order.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderComponent,
    CatalogComponent,
    ProductPageComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
