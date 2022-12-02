import { TestBed } from '@angular/core/testing';

import { BdmsaleService } from './bdmsale.service';

describe('BdmsaleService', () => {
  let service: BdmsaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdmsaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
