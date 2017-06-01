import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OccupantComponent } from './occupant.component';
import { OccupantDetailComponent } from './occupant-detail/occupant-detail.component';
import { OccupantListComponent } from './occupant-list/occupant-list.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { 
                path: 'occupants' , 
                component: OccupantComponent,
                children: [
                    { path: 'add' , component: OccupantDetailComponent }, 
                ]
            }
        ])    
    ],
    exports: [
        RouterModule
    ]
})
export class OccupantRoutingModule {}

