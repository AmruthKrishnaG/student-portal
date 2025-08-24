import { TestBed } from '@angular/core/testing';

import { LoginService } from './login-service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test checkDetails', () => {
    expect(service.checkDetails('user', 'user')).toBeTruthy();
    expect(service.checkDetails('user', 'blah')).toBeFalsy();
  });
});
