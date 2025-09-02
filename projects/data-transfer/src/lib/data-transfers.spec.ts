import { TestBed } from '@angular/core/testing';

import { DataTransfers } from './data-transfers';

describe('DataTransfers', () => {
  let service: DataTransfers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTransfers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
