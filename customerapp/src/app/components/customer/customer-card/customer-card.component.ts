import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/Customer';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input()
  customers:Customer[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
