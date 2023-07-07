import { TestBed } from '@angular/core/testing';

import { ResolveservicetwoService } from './resolveservicetwo.service';

describe('ResolveservicetwoService', () => {
  let service: ResolveservicetwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveservicetwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
