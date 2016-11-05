import { Component } from '@angular/core';
import { StationDataService } from './station-data.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StationDataService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  stations = [];
  constructor(private stationDataService: StationDataService) { }

  ngOnInit(): void {
    this.stationDataService.getStations()
      .then((root => this.stations = root.Root.stations.station.filter(station => station.zones)));
  }

}
