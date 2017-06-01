import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationComponent } from './location.component';

import { LoggerService } from '../logger.service';
import { LocationService } from './location.service';
import { OccupantService } from '../occupant/occupant.service';
import { NeedService } from '../need/need.service';

const LocationRoutes: Routes = [
    {
        path: 'location/:id', component: LocationComponent,
        //children: [ { path: ':id', component: LocationComponent } ]
    }
];

@NgModule({
  declarations: [
    LocationComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forChild(LocationRoutes)
  ],
  exports: [
      RouterModule
  ],
  providers: [
    LoggerService,
    LocationService,
    OccupantService,
    NeedService
  ]
})
export class LocationModule { }
