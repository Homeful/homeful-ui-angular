import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocationService } from '../location/location.service';
import { Location } from '../location/model';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnDestroy {

    location: Location = {
		id: null,
		name: '',
		needs: [],
		notes: '',
		occupants: [],
		longitude: null,
		latitude: null
	};
	sub: Subscription;

    constructor(
		private locationService: LocationService, 
		private router: Router,
		private route: ActivatedRoute
	) { }

    ngOnInit() {
		console.log('creating location component');
		this.sub = this.route.params.subscribe(params => {
			console.log(+params['locationId']);
			const locationId = +params['locationId']; // (+) converts string 'id' to a number
			this.locationService.getLocation(locationId).subscribe(location => this.location = location);
		});
    }

    ngOnDestroy() {
        console.log('destroying location component');
    }

}
