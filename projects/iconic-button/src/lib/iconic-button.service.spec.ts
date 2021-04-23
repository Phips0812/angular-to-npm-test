import { TestBed } from '@angular/core/testing';

import { IconicButtonService } from './iconic-button.service';

describe('IconicButtonService', () => {
  let service: IconicButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconicButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
