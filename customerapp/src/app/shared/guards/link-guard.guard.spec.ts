import { TestBed } from '@angular/core/testing';

import { LinkGuardGuard } from './link-guard.guard';

describe('LinkGuardGuard', () => {
  let guard: LinkGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LinkGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
