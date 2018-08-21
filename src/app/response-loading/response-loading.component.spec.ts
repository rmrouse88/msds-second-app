import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseLoadingComponent } from './response-loading.component';

describe('ResponseLoadingComponent', () => {
  let component: ResponseLoadingComponent;
  let fixture: ComponentFixture<ResponseLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
