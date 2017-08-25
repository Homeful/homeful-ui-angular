import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

import { Occupant } from '../model';
import { Location } from '../../location/model';
import { OccupantService } from '../occupant.service';
import { LocationService } from '../../location/location.service';
import { LoggerService } from '../../logger.service';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'occupant-add',
	templateUrl: './occupant-add.component.html',
	styleUrls: ['./occupant-add.component.css']
})
export class OccupantAddComponent implements OnInit {

	locations: Location[];
	occupant: Occupant;
	submitted = false;
	currentLocation: Location;
	sub: Subscription;

	constructor(private locationService: LocationService,
		private occupantService: OccupantService,
		private loggerService: LoggerService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		console.log('initializing occupant detail component');
		this.sub = this.route.params.subscribe(params => {
			const locationId = +params['locationId']; // (+) converts string 'id' to a number
			this.locationService.getLocation(locationId).subscribe(location => this.locationService.setSelectedLocation(location));
		});
		this.locations = this.locationService.getLocations();
		this.currentLocation = this.locationService.getSelectedLocation();
	}

	setSelectedLocation(selectElement) {
		for (let i = 0; i < selectElement.options.length; i++) {
            let optionElement = selectElement.options[i];
            if (optionElement.selected == true) {
				let index = this.locations.indexOf(optionElement.value);
				if (index != -1) {
					console.log(`location is ${this.locations[index]}`);
					this.occupant.locationId = this.locations[index].id;
				}
			}
		}
	}

	onSubmit() {
		this.submitted = true;
		console.log(this.occupant);
		this.occupantService.createOccupant(this.occupant)
			.subscribe(	() => this.onSaveComplete(),
						(error: any) => console.log(error));
	}

	onSaveComplete(): void {
		this.router.navigate([`/location/${this.currentLocation.id}/occupants`]);
    }

}
