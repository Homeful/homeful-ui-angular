import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OccupantModule } from '../occupant/occupant.module';
import { LocationModule } from '../location/location.module';

import { PopupComponent } from '../popup/popup.component';

import { LoggerService } from '../logger.service';
import { PopupService } from '../popup/popup.service';


@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    OccupantModule,
    LocationModule,
    RouterModule,
  ],
  exports: [
      RouterModule
  ],
  providers: [
    LoggerService,
    PopupService
  ]
})
export class PopupModule { }
