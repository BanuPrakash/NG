import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, shareReplay, Subscription } from 'rxjs';
import { Customer } from 'src/app/shared/model/Customer';
import { DataService } from 'src/app/shared/services/data.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [SharedService]
})
export class CustomerListComponent implements OnInit, OnDestroy {
  customers: Customer[] = [];
  original: Customer[] = [];
  searchText:string = "";
  displayType:string = "card";

  customerObservable!: Observable<Customer[]>; 
  customerSubscription!:Subscription;
  constructor(private dataService:DataService) { 
    this.customerObservable = this.dataService.getCustomers().pipe(shareReplay());
  }
  ngOnDestroy(): void {
    this.customerSubscription.unsubscribe();// if not done ==> memory leaks
  }

  ngOnInit(): void {
    this.customerSubscription = this.customerObservable.subscribe(data => {
      this.customers = this.original = data;
    });
    this.customerObservable.subscribe(data => {
      console.log(data);
    });
  }

  changeTo(type:string): void {
    this.displayType = type;
  }
  deleteCustomerFromList(id:number) {
    // this.customers = this.customers.filter(c => c.id !== id);
    this.dataService.deleteCustomer(id).subscribe(data => console.log("Delete" , data));
    this.dataService.getCustomers().subscribe(data => {
      this.customers = this.original = data;
    });
  }

  filterCustomers() {
    this.customers = 
      this.original
      .filter(c => c.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) >= 0)
  }
}
