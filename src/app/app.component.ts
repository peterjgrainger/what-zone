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
  title = 'Which zone is a station in?';
  stations = [];
  filteredList = [];
  query;
  selectedStation;
  constructor(private stationDataService: StationDataService) { }

  ngOnInit(): void {
    this.stationDataService.getStations()
      .then(stations => {
        this.stations = stations.filter(station => station.zones);
      });
  }

  stationSelected($event) {
    if ($event) {
      this.selectedStation = $event;
    }
  }

  filter() {
    if (this.query !== "") {
      this.filteredList = this.stations.filter(function (el) {
        return el.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.selectedStation = item;
    this.query = item.name;
    this.filteredList = [];
  }

}
