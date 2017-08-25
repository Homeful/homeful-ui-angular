import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MapComponent } from './map.component';

import { MapService } from './map.service';
import { LoggerService } from '../logger.service';
import { MarkerService } from './marker.service';

@NgModule({
    declarations: [
        MapComponent,
    ],
    imports: [
        FormsModule,
        HttpModule,
    ],
    providers: [
        MapService,
        MarkerService,
        LoggerService,
    ]
})
export class MapModule { }
