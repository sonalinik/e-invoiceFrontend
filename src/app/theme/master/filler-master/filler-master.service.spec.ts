import { TestBed } from '@angular/core/testing';

import { FillerMasterService } from './filler-master.service';

describe('FillerMasterService', () => {
  let service: FillerMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FillerMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
