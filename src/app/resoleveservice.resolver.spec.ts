import { TestBed } from '@angular/core/testing';

import { ResoleveserviceResolver } from './resoleveservice.resolver';

describe('ResoleveserviceResolver', () => {
  let resolver: ResoleveserviceResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResoleveserviceResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
