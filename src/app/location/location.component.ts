import { Component, OnInit, OnDestroy } from '@angular/core';

import { LocationService } from './location.service';

import { Location } from './model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {

  location: Location

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    console.log('creating location component');
    this.location = this.locationService.getSelectedLocation();
  }

  ngOnDestroy() {
    console.log('destroying location component');
  }

}
