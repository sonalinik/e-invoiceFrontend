import { TestBed } from '@angular/core/testing';

import { DoorgroupService } from './doorgroup.service';

describe('DoorgroupService', () => {
  let service: DoorgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoorgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
