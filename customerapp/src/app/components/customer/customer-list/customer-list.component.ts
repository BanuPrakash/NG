import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  original: Customer[] = [];
  searchText:string = "";
  constructor() { }

  ngOnInit(): void {
    this.customers = this.original = [{
      "id": 1,
      "firstName": "Rachel",
      "lastName": "Green ",
      "gender": "female",
      "address": "M G Road"
    },
    {
      "id": 2,
      "firstName": "Chandler",
      "lastName": "Bing",
      "gender": "male",
      "address": "M G Road"
    },
    {
      "id": 3,
      "firstName": "Joey",
      "lastName": "Tribbiani",
      "gender": "male",
      "address": "M G Road"
    },
    {
      "id": 4,
      "firstName": "Monica",
      "lastName": "Geller",
      "gender": "female",
      "address": "M G Road"
    },
    {
      "id": 5,
      "firstName": "Ross",
      "lastName": "Geller",
      "gender": "male",
      "address": "M G Road"
    },
    {
      "id": 6,
      "firstName": "Phoebe",
      "lastName": "Buffay",
      "gender": "female",
      "address": "M G Road"
    }
    ];
  }

  deleteCustomerFromList(id:number) {
    this.customers = this.customers.filter(c => c.id !== id);
  }

  filterCustomers() {
    this.customers = 
      this.original
      .filter(c => c.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0)
  }
}
