import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OccupantComponent } from './occupant.component';
import { OccupantListComponent } from './occupant-list/occupant-list.component';
import { OccupantAddComponent } from './occupant-add/occupant-add.component';
import { OccupantEditComponent } from './occupant-edit/occupant-edit.component';
import { OccupantDeleteComponent } from './occupant-delete/occupant-delete.component';

@NgModule({
	imports: [
		RouterModule.forChild([
			{
				path: 'occupants',
				component: OccupantComponent,
				children: [
					{ path: '', component: OccupantListComponent },
					{ path: 'add', component: OccupantAddComponent },
					{ path: 'edit/:occupantId', component: OccupantEditComponent },
					{ path: 'delete/:occupantId', component: OccupantDeleteComponent },
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class OccupantRoutingModule { }

