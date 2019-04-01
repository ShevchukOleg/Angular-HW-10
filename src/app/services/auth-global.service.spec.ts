import { TestBed } from '@angular/core/testing';

import { AuthGlobalService } from './auth-global.service';

describe('AuthGlobalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGlobalService = TestBed.get(AuthGlobalService);
    expect(service).toBeTruthy();
  });
});
