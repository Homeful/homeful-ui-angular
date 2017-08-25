import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LocationService } from '../location/location.service';
import { Location } from '../location/model';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'occupant',
    templateUrl: './occupant.component.html',
    styleUrls: ['./occupant.component.css']
})
export class OccupantComponent implements OnInit, AfterViewInit, OnDestroy {
	sub: Subscription;

    constructor(
		private locationService: LocationService, 
		private router: Router,
		private route: ActivatedRoute
	) { }

    ngOnInit() {
        //(<any>$('.modal')).modal();
		console.log('creating occupant component');
		// this.sub = this.route.params.subscribe(params => {
		// 	const locationId = +params['id']; // (+) converts string 'id' to a number
		// 	this.locationService.getLocation(locationId).subscribe(location => this.locationService.setSelectedLocation(location));
		// });
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
