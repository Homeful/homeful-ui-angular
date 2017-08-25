import { Injectable } from '@angular/core';
import { LoggerService } from '../logger.service';
import { MarkerService } from './marker.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

declare var google: any;

@Injectable()
export class MapService {
    private map: any;
    private defaultPosition: any;

    constructor(private loggerService: LoggerService, 
                            private markerService: MarkerService) { }

    setMap(map) {
        this.map = map;
    }

    getMap() {
        return this.map;
    }

    getDefaultPosition() {
        return this.defaultPosition;
    }

    onMapsReady() {
        this.defaultPosition = new google.maps.LatLng(36.1627, -86.7816);
        var mapOptions = {
            zoom: 12,
            center: this.defaultPosition
        };
        this.setMap(new google.maps.Map(document.getElementById('map'), mapOptions));
        this.markerService.loadMarkersOnMap(this.map);
    }

    loadMap() {     
        (<any>window).googleMapsReady=this.onMapsReady.bind(this);
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC8eMybD8y6vguTF7e64TEyO2F6TUNuSN0&callback=googleMapsReady";
        document.getElementsByTagName("head")[0].appendChild(script);
        this.loggerService.log("map loaded.");
    }
}