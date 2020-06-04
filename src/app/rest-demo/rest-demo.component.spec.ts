import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestDemoComponent } from './rest-demo.component';

describe('RestDemoComponent', () => {
  let component: RestDemoComponent;
  let fixture: ComponentFixture<RestDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
