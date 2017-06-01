import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OccupantRoutingModule } from './occupant.routing';

import { OccupantComponent } from './occupant.component';
import { OccupantDetailComponent } from './occupant-detail/occupant-detail.component';
import { OccupantListComponent } from './occupant-list/occupant-list.component';

import { LoggerService } from '../logger.service';
import { OccupantService } from './occupant.service';
import { NeedService } from '../need/need.service';

@NgModule({
  declarations: [
    OccupantComponent,
    OccupantDetailComponent,
    OccupantListComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    OccupantRoutingModule
  ],
  exports: [
      RouterModule
  ],
  providers: [
    LoggerService,
    NeedService,
    OccupantService,
  ]
})
export class OccupantModule { }
