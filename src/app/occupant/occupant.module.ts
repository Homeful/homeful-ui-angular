import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OccupantRoutingModule } from './occupant.routing';

import { OccupantComponent } from './occupant.component';
import { OccupantListComponent } from './occupant-list/occupant-list.component';
import { OccupantAddComponent } from './occupant-add/occupant-add.component';
import { OccupantEditComponent } from './occupant-edit/occupant-edit.component';
import { OccupantDeleteComponent } from './occupant-delete/occupant-delete.component';

import { LoggerService } from '../logger.service';
import { OccupantService } from './occupant.service';
import { NeedService } from '../need/need.service';

@NgModule({
	declarations: [
		OccupantComponent,
		OccupantListComponent,
		OccupantAddComponent,
		OccupantEditComponent,
		OccupantDeleteComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		OccupantRoutingModule
	],
	providers: [
		LoggerService,
		NeedService,
		OccupantService,
	]
})
export class OccupantModule { }
