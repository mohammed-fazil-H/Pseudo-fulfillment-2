import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMethodComponent } from './pay-method.component';

describe('PayMethodComponent', () => {
  let component: PayMethodComponent;
  let fixture: ComponentFixture<PayMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayMethodComponent]
    });
    fixture = TestBed.createComponent(PayMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
