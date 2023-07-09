import { TestBed } from '@angular/core/testing';

import { GiftopiaFormService } from './giftopia-form.service';

describe('GiftopiaFormService', () => {
  let service: GiftopiaFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiftopiaFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
