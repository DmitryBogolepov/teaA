import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {OrderComponent} from "./pages/order/order.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";

const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'order', component:OrderComponent},
  {path:'catalog', component:CatalogComponent},
  {path:'product/:id', component:ProductPageComponent},
  // {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
