import { TestBed } from '@angular/core/testing';

import { GnomesService } from './gnomes.service';

describe('GnomesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GnomesService = TestBed.get(GnomesService);
    expect(service).toBeTruthy();
  });
});
