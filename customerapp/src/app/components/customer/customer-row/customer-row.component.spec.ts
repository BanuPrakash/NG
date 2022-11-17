import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRowComponent } from './customer-row.component';

describe('CustomerRowComponent', () => {
  let component: CustomerRowComponent;
  let fixture: ComponentFixture<CustomerRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
