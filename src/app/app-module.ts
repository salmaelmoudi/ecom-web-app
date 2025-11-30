import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { ProductsComponent } from './products/products';
import { CustomersComponent } from './customers/customers';
import { OrdersComponent } from './orders/orders';
import { OrderDetailsComponent } from './order-details/order-details';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }
