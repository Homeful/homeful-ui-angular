/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OccupantService } from './occupant.service';

describe('OccupantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OccupantService]
    });
  });

  it('should ...', inject([OccupantService], (service: OccupantService) => {
    expect(service).toBeTruthy();
  }));
});
