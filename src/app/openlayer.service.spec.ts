import { TestBed } from '@angular/core/testing';

import { OpenlayerService } from './openlayer.service';

describe('OpenlayerService', () => {
  let service: OpenlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
