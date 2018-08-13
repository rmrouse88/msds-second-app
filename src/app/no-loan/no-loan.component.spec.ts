import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoanComponent } from './no-loan.component';

describe('NoLoanComponent', () => {
  let component: NoLoanComponent;
  let fixture: ComponentFixture<NoLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
