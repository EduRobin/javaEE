import { TestBed } from '@angular/core/testing';

import { TokenHolderService } from './token-holder.service';

describe('TokenHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenHolderService = TestBed.get(TokenHolderService);
    expect(service).toBeTruthy();
  });
});
