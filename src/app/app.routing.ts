import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapComponent } from './map/map.component';
import { LocationComponent } from './location/location.component';
import { OccupantComponent } from './occupant/occupant.component';

const appRoutes: Routes = [
    { path: '', component: MapComponent },
    { path: 'map', component: MapComponent },
    { path: 'location/:id', component: LocationComponent },
    { path: 'occupants', component: OccupantComponent },
    { path: '**', redirectTo: 'map' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }

