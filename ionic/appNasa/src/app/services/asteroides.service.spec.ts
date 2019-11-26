import { TestBed } from '@angular/core/testing';

import { AsteroidesService } from './asteroides.service';

describe('AsteroidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsteroidesService = TestBed.get(AsteroidesService);
    expect(service).toBeTruthy();
  });
});
