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
import { TextConverterPipe } from './shared/pipe/text-converter.pipe';
import { FilterByBrandPipe } from './shared/pipe/filter-by-brand.pipe';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { Route, RouterModule } from '@angular/router';


const routes:Route[] = [
  {
    path:'customers',
    component:CustomerListComponent
  },
  {
    path:'products',
    component:ProductListComponent
  },
  {
    path:'customers/edit/:id',
    component:CustomerEditComponent
  },
  {
    path:'',
    component:CustomerListComponent
  },
  {
    path:'orders', /* lazy loading module */
    loadChildren:() => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path:'**',
    component:CustomerListComponent
  }
]

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
    HoverDirective,
    TextConverterPipe,
    FilterByBrandPipe,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
