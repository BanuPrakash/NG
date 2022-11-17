import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Customer } from 'src/app/shared/model/Customer';
import { CustomerCardComponent } from '../customer-card/customer-card.component';

import { CustomerListComponent } from './customer-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customers:Customer[] = [{
    "id": 1,
    "firstName": "Rachel",
    "lastName": "Green ",
    "gender": "female",
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
  } 
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListComponent, CustomerCardComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 3 customers', () => {
    component.customers = component.original = customers; // mock data
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll(".card");
    expect(cards.length).toEqual(3);
  });

  it("should delete a customer", () => {
    component.customers = component.original = customers; // mock data
    component.deleteCustomerFromList(4);
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll(".card");
    expect(cards.length).toEqual(2);
  });

});
