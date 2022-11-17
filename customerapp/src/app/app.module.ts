import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerCardComponent } from './components/customer/customer-card/customer-card.component';
import { FormsModule } from '@angular/forms';
import { CustomerRowComponent } from './components/customer/customer-row/customer-row.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCardComponent,
    CustomerRowComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
