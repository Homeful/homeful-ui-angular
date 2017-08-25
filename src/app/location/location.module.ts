import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OccupantModule } from '../occupant/occupant.module';
import { NeedModule } from '../need/need.module';
import { LocationRoutingModule } from './location.routing';

import { LocationComponent } from './location.component';

import { LocationService } from './location.service';

@NgModule({
	declarations: [
		LocationComponent,
	],
	imports: [
		CommonModule,
		OccupantModule,
		NeedModule,
		LocationRoutingModule
	],
	providers: [
		LocationService
	]
})
export class LocationModule { }
