/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StationDataService } from './station-data.service';

describe('Service: StationData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StationDataService]
    });
  });

  it('should ...', inject([StationDataService], (service: StationDataService) => {
    expect(service).toBeTruthy();
  }));
});
