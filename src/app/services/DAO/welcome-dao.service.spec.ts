import { TestBed } from '@angular/core/testing';

import { WelcomeDAOService } from './welcome-dao.service';

describe('WelcomeDAOService', () => {
  let service: WelcomeDAOService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeDAOService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
