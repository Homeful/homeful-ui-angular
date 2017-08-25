import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location.component';

const locationRoutes: Routes = [
	{
		path: 'location/:locationId',
		component: LocationComponent,
		loadChildren: '../occupant/occupant.module#OccupantModule',
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(locationRoutes)
	],
	exports: [
		RouterModule
	]
})
export class LocationRoutingModule { }