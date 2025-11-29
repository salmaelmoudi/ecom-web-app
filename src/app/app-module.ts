import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductsComponent } from './products/products';
// @ts-ignore
import {HttpClientModule} from '@angular/common/module.d';
import { Customers } from './customers/customers';
import { Orders } from './orders/orders';
import { OrderDetails } from './order-details/order-details';

@NgModule({
  declarations: [
    App,
    Products,
    Customers,
    Orders,
    OrderDetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
