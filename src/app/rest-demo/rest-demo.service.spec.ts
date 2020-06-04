import { TestBed } from '@angular/core/testing';

import { RestDemoService } from './rest-demo.service';

describe('RestDemoService', () => {
  let service: RestDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
