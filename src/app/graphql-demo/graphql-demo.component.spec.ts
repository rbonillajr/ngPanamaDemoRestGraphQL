import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlDemoComponent } from './graphql-demo.component';

describe('GraphqlDemoComponent', () => {
  let component: GraphqlDemoComponent;
  let fixture: ComponentFixture<GraphqlDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
