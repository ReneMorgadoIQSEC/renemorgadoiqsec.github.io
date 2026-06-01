import { TestBed } from '@angular/core/testing';

import { ConocerGeneralService } from './conocer-general-service';

describe('ConocerGeneralService', () => {
  let service: ConocerGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConocerGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
