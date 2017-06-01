import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { LocationService } from '../location/location.service';
import { Location } from '../location/model';

@Component({
  selector: 'occupant',
  templateUrl: './occupant.component.html',
  styleUrls: ['./occupant.component.css']
})
export class OccupantComponent implements OnInit, AfterViewInit, OnDestroy {
  private location: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    //(<any>$('.modal')).modal();
    console.log('creating occupant component');
    this.location = this.locationService.getSelectedLocation();
  }

  ngAfterViewInit() {
    (<any>$('.datepicker')).pickadate({
      selectMonths: true // Creates a dropdown to control month
    });
    (<any>$('select')).material_select();
  }

  ngOnDestroy() {
    console.log('destroying occupant component');
  }

}
