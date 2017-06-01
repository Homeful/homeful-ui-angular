import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { Occupant } from '../model';
import { Location } from '../../location/model';
import { OccupantService } from '../occupant.service';
import { LocationService } from '../../location/location.service';
import { LoggerService } from '../../logger.service';

@Component({
  selector: 'occupant-detail',
  templateUrl: './occupant-detail.component.html',
  styleUrls: ['./occupant-detail.component.css']
})
export class OccupantDetailComponent implements OnInit {

  private locations: Location[];
  
  occupant: Occupant = {
    id: 1,
    name: '',
    locationId: 0,
    birthdate: '',
    gender: '',
    createdOn: '',
    updatedOn: '',
    active: true,
    notes: ''
  }
  
  constructor(private locationService: LocationService,
              private occupantService: OccupantService,
              private loggerService: LoggerService) { }

  ngOnInit() {
    console.log('initializing occupant detail component');
    this.locations = this.locationService.getLocations();
  }

  ngAfterViewInit() {
    console.log('occupant detail rendered');
  }

  onSubmit() {

  }

}
