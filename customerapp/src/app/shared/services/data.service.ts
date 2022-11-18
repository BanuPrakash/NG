import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';
//HttpClient is a pre-defined service in HttpClientModule
@Injectable({
  providedIn: 'root'
})
export class DataService {
  customerBaseUrl:string = 'http://localhost:1234/customers/';

  constructor(private http:HttpClient) { }

  getCustomers():Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerBaseUrl);
  }

  getCustomer(id:number):Observable<Customer> {
    return this.http.get<Customer>(this.customerBaseUrl + id);
  }

  addCustomer(customer:Customer): Observable<any> {
    return this.http.post(this.customerBaseUrl, customer);
  }
  
  // PUT http://localhost:1234/customers/2
  // payload new data
  updateCustomer(customer:Customer): Observable<any> {
    return this.http.put(this.customerBaseUrl + customer.id, customer);
  }

  deleteCustomer(id:number): Observable<any> {
    return this.http.delete(this.customerBaseUrl + id);
  }
}
