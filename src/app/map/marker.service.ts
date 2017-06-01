import { Injectable } from '@angular/core';

import { LoggerService } from '../logger.service';
import { LocationService } from '../location/location.service';

import { Location } from '../location/model';

import {Subscription} from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

declare var google: any;

@Injectable()
export class MarkerService {
  private markers: any;
  private selectedMarker: any;
  private locations: Location[];

  constructor(private loggerService: LoggerService, 
              private locationService: LocationService) {
                console.log('marker service created');
  }
  
  markerMoved(marker, location): boolean {
    return (location.latitude != marker.position.lat || location.longitude != marker.position.lng);
  }

  pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1,
    };
  }

  addMarkerClick(marker, location, map) {
      // TODO - fill in the content string with actual data from the location
      // TODO - make the data editable (edit a location)
      // TODO - add a delete/remove button in the infowindow
    let parent = this;
    var infowindow = new google.maps.InfoWindow({
      content: '<div class="row">' +
              '<div class="col s12">' +
              '<div class="row">' +
              '<div class="input-field col s12">' +
                  '<label for="name" class="active">Name</label>' + 
                  '<input type="text" name="name" class="validate" value="' + location.name + '"/>' +
              '</div>' +
              '</div>' +
              '</div>' +
      '</div>' + '<a class="waves-effect waves-light btn left" onclick="updateSelectedLocation()">Save</a>' +
      '<a class="waves-effect waves-light btn right" onclick="removeLocation()">Delete</a>'
    });
    
    marker.addListener('click', function () {
      parent.selectedMarker = marker;
      parent.locationService.setSelectedLocation(location);
      (<any>$('#popup')).modal('open');
    });
  }
  addMarkerMouseup(location, marker) {
    let parent = this;
    marker.addListener('mouseup', function () {
      if (parent.markerMoved(marker, location)) {
        parent.updateLocation(location, marker);
      }     
    });
  }

  updateLocation(location, marker) {
    if (marker.getPosition().lat() != location.latitude || marker.getPosition().lng() != location.longitude) {
      location.latitude = marker.getPosition().lat();
      location.longitude = marker.getPosition().lng();
      this.locationService.updateLocation(location).subscribe(updatedLocation => {
        
      }, (errorMsg: string) => {
          this.loggerService.log(`Error occurred while updating location.`);
          this.loggerService.log(`${errorMsg}`);
      });
    }   
  }

  loadMarkersOnMap(map) {
    if (!this.locations) {
      this.locationService.getLocationsObservable()
        .subscribe(locations => {
          this.locations = locations;
        }, (errorMsg: string) => {
          this.loggerService.log(`Error occurred while fetching locations.`);
          this.loggerService.log(`${errorMsg}`);
        }, () => this.createMarkers(map));
    } else {
      this.createMarkers(map);
    }
  }

  createMarkers(map) {
    console.log('creating markers');
    this.markers = this.locations.map((location) => { this.createMarker(location, map); });
    
  }

  getMarkers() {
    return this.markers;
  }

  displayMarkers() {
    this.loggerService.log("markers displayed.");
  }

  createMarker(location, map) {
    // make marker draggable in dev, not in prod
    var marker = new google.maps.Marker({
      map: map,
      position: { lat: location.latitude, lng: location.longitude },
      animation: google.maps.Animation.DROP,
      draggable: true,
      title: location.name
    });
    
    marker.setMap(map);

    this.addMarkerMouseup(location, marker);
    this.addMarkerClick(marker, location, map);
  }

  createNewMarker(map, defaultLocation) {
    var marker = new google.maps.Marker({
      map: map,
      position: defaultLocation,
      animation: google.maps.Animation.DROP,
      draggable: true,
      title: 'New Camp'
    });
    let tempLocation = this.locationService.createLocationFromMarker(marker);
    this.locationService.createLocation(tempLocation).subscribe(location => {
      marker.setMap(map);
      this.addMarkerMouseup(location, marker);
      this.addMarkerClick(marker, location, map);
    }, (errorMsg: string) => {
      this.loggerService.log(`Error occurred while creating location.`);
      this.loggerService.log(`${errorMsg}`);
    });
  }
}
