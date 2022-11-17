import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  constructor() { }

  ngOnInit(): void {
    this.customers = [{
      "id": 1,
      "firstName": "Rachel",
      "lastName": "Green "
    },
    {
      "id": 2,
      "firstName": "Chandler",
      "lastName": "Bing"
    },
    {
      "id": 3,
      "firstName": "Joey",
      "lastName": "Tribbiani"
    },
    {
      "id": 4,
      "firstName": "Monica",
      "lastName": "Geller"
    },
    {
      "id": 5,
      "firstName": "Ross",
      "lastName": "Geller"
    },
    {
      "id": 6,
      "firstName": "Phoebe",
      "lastName": "Buffay"
    }
    ];
  }

}
