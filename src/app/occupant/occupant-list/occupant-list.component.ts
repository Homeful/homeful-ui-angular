import { Component, OnInit, OnDestroy } from '@angular/core';
import { Occupant } from '../model';
import { Location } from '../../location/model';
import { OccupantService } from '../occupant.service';
import { LocationService } from '../../location/location.service';

@Component({
  selector: 'occupant-list',
  templateUrl: './occupant-list.component.html',
  styleUrls: ['./occupant-list.component.css']
})
export class OccupantListComponent implements OnInit {

  occupants: Occupant[];
  currentLocation: Location;

  constructor(private occupantService: OccupantService,
              private locationService: LocationService) { }

  ngOnInit() {
    if (this.locationService.getSelectedLocation()) {
      this.currentLocation = this.locationService.getSelectedLocation();
      this.occupantService.getOccupantsByLocation(this.currentLocation.id).subscribe(occupants => this.occupants = occupants);
    }
    console.log('initializing occupant list component');
  }

  ngOnDestroy() {
    console.log('destroying occupant list component');
  }

}
