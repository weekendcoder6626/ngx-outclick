import { TestBed } from '@angular/core/testing';

import { OutclickService } from './outclick.service';

describe('OutclickService', () => {
  let service: OutclickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutclickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
