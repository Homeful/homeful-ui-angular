import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationComponent } from './location/location.component';
import { NeedComponent } from './need/need.component';
import { OccupantComponent } from './occupant/occupant.component';
import { PopupComponent } from './popup/popup.component';

import { LoggerService } from './logger.service';
import { MapService } from './map/map.service';
import { MarkerService } from './map/marker.service';
import { LocationService } from './location/location.service';
import { OccupantService } from './occupant/occupant.service';
import { NeedService } from './need/need.service';
import { PopupService } from './popup/popup.service';
import { OccupantDetailComponent } from './occupant/occupant-detail/occupant-detail.component';
import { OccupantListComponent } from './occupant/occupant-list/occupant-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    LocationComponent,
    NeedComponent,
    OccupantComponent,
    PopupComponent,
    OccupantDetailComponent,
    OccupantListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    MapService,
    MarkerService,
    LoggerService,
    LocationService,
    NeedService,
    OccupantService,
    PopupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
