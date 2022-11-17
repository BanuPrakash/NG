import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardComponent } from './customer-card.component';

describe('CustomerCardComponent', () => {
  let component: CustomerCardComponent;
  let fixture: ComponentFixture<CustomerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should render customer card", () => {
    component.customers = [{
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
    }];
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll('.card');
    expect(cards.length).toEqual(2);
  });

  it("testing @Output by mocking", () => {
    component.customers = [{
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
    }];
    fixture.detectChanges();
    // jest.fn()
    const delEvent = spyOn(component.delEvent, 'emit');
    let delBtn = fixture.nativeElement.querySelectorAll('.fa-trash');
    delBtn[0].click();
    expect(delEvent).toHaveBeenCalled();
    expect(delEvent).toHaveBeenCalledWith(1);
  });
});
