import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class StationDataService {

  constructor(private http: Http) {
  }

  getStations(): Promise<any> {
    return this.http.get('/app/store/stations.json')
      .toPromise()
      .then(result => result.json().Root.stations.station)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
