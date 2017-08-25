import { Component, OnInit, AfterViewInit, AfterContentInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../logger.service';
import { MapService } from './map.service';
import { MarkerService } from './marker.service';

@Component({
    selector: 'map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {
    private markers: any;
    isBusy = false;
    
    constructor(
        private mapService: MapService, 
        private loggerService: LoggerService, 
        private markerService: MarkerService) {    }

    ngOnInit(): void {
        this.loggerService.log("map initialized.");
    }

    ngAfterContentInit(): void {
        
    }

    ngAfterViewInit(): void {
        this.mapService.loadMap();
    }

    createLocation(): void {
        this.markerService.createNewMarker(this.mapService.getMap(), this.mapService.getDefaultPosition());
    }

    ngOnDestroy() {
        (<any>window).google = {}
    }
}