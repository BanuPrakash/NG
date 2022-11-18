import {   Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from 'src/app/shared/model/Customer';
import { DataService } from 'src/app/shared/services/data.service';
@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  operationText:string ="Update";
  customer:  Customer =   {
    id:0,
    firstName:"",
    lastName:"",
    gender:"",
    address:""
  };
  errorMessage: string = "";
 
  @ViewChild('customerForm') customerForm!: NgForm;
  
  constructor(private router: Router, 
              private route: ActivatedRoute, 
              private dataService: DataService) { }

  ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        let id = +params['id'];
        if (id !== 0) {
              this.getCustomer(id);
        }
      });

  }

  getCustomer(id: number) {
      this.dataService.getCustomer(id).subscribe((customer: Customer) => {
        this.customer = customer;
      });
  }

  submit() {
     this.dataService.updateCustomer(this.customer)
          .subscribe((data:any) => {
            console.log(data);
            this.router.navigate(['/customers']);
        });
  }
  
  cancel(event: Event) {
    event.preventDefault();
    this.router.navigate(['/customers']);
  }
}