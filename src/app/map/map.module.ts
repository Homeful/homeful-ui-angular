import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MapComponent } from './map.component';

import { MapService } from './map.service';
import { LoggerService } from '../logger.service';
import { MarkerService } from './marker.service';

const MapRoutes: Routes = [
    { path: 'map', component: MapComponent },
    { path: '', component: MapComponent }
];

@NgModule({
  declarations: [
    MapComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MapRoutes),
  ],
  exports: [
      RouterModule
  ],
  providers: [
    MapService,
    MarkerService,
    LoggerService,
  ]
})
export class MapModule { }
