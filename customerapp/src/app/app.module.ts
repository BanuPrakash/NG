import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCardComponent } from './components/customer/customer-card/customer-card.component';
import { FormsModule } from '@angular/forms';
import { CustomerRowComponent } from './components/customer/customer-row/customer-row.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';

import {HttpClientModule} from '@angular/common/http';
import { HoverDirective } from './shared/directives/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCardComponent,
    CustomerRowComponent,
    FirstComponent,
    SecondComponent,
    ProductListComponent,
    ProductCardComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
