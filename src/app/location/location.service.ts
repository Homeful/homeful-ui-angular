import { Injectable } from '@angular/core';
import { Location } from './model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { LoggerService } from '../logger.service';


@Injectable()
export class LocationService {
  private locationsUrl = 'http://homefulapi.azurewebsites.net/api/locations';
  private selectedLocation: Location;

  constructor(private http: Http, private loggerService: LoggerService) { }
  
  fixLocation(location) {
    let loc = new Location();
    loc.id = location.Id;
    loc.latitude = location.Latitude;
    loc.longitude = location.Longitude;
    loc.name = location.Name;
    loc.needs = location.Needs;
    loc.notes = location.Notes;
    loc.occupants = location.Occupants;
    return loc;
  }

  getLocationsUrl(): string {
    return this.locationsUrl;
  }

  setSelectedLocation(location: Location) {
    this.selectedLocation = location;
    console.log(`setting selected location to ${location.name}`)
  }

  getSelectedLocation() {
    return this.selectedLocation;
  }

  getLocations(): Observable<Location[]> {
    this.loggerService.log(`Getting Locations...`);
    return this.http.get(this.locationsUrl)
      .map((response) => {
        return response.json().map(this.fixLocation);
        //return response.json() as Location[];
      })
      .do((locations) => {
        this.loggerService.log(`Got ${locations.length} locations.`);
      })
      .catch((error) => {
        return Observable.throw(`Error accessing api: ${this.locationsUrl}\n${error}`);
      });
  }

  getLocation(id: number): Observable<Location> {
    let api = this.locationsUrl+'/'+id;
    return this.http.get(api)
      .map((response) => {
        return response.json() as Location;
      })
      .do((location) => {
        this.loggerService.log(`Got location.`);
      })
      .catch((error) => {
        return Observable.throw(`Error accessing api: ${api}`)
      })
  }

  createLocationFromMarker(marker: any): Location {
    let newLocation = new Location();
    newLocation.name = marker.title;
    newLocation.latitude = marker.getPosition().lat();
    newLocation.longitude = marker.getPosition().lng();
    return newLocation;
  }

  createLocation(location: Location): Observable<Location> {
    let api = this.locationsUrl;
    this.loggerService.log('Creating location...');
    console.log(location);
    return this.http.post(api, location)
      .map((response) => {
        return response.json() as Location;
      })
      .do((location) => {
        this.loggerService.log(`Location created.`);
      })
      .catch((error) => {
        return Observable.throw(`Error creating location: ${location.name}`)
      })

  }

  updateLocation(location: Location): Observable<Location> {
    let api = this.locationsUrl+'/'+location.id;
    this.loggerService.log('Updating location...');
    return this.http.put(api, location)
      .map((response) => {
        return response.json() as Location;
      })
      .do((location) => {
        this.loggerService.log(`Location updated.`);
      })
      .catch((error) => {
        return Observable.throw(`Error updating location: id - ${location.id}`)
      })
  }
}
