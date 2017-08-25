import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';
import { HttpModule } from '@angular/http';
import { OccupantModule } from './occupant/occupant.module';
import { LocationModule } from './location/location.module';
import { MapModule } from './map/map.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoggerService } from './logger.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        OccupantModule,
        LocationModule,
        MapModule,
        AppRoutingModule
    ],
    providers: [
        LoggerService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
