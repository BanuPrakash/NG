import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from '../components/orders/order-list/order-list.component';
import { Route, RouterModule } from '@angular/router';

const routes:Route[] = [
  {
    path:'',
    component:OrderListComponent
  }
];

@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
