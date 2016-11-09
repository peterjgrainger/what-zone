import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { StationData } from './station-data';


@Injectable()
export class StationDataService {

  stationData = new StationData();

  getStations(): Array<any> {

    return this.stationData.stationData();
  }
}
