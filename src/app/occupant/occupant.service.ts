import { Injectable } from '@angular/core';
import { Occupant } from './model';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { LoggerService } from '../logger.service';
import { LocationService } from '../location/location.service';

@Injectable()
export class OccupantService {
  private occupantsUrl = 'http://homefulapi.azurewebsites.net/api/occupants';

  constructor(
    private http: Http, 
    private loggerService: LoggerService, 
    private locationService: LocationService) { }

  fixOccupant(occupant) {
    let occ = new Occupant();
    occ.id = occupant.Id;
    occ.name = occupant.Name;
    occ.locationId = occupant.LocationId;
    occ.birthdate = occupant.Birthdate;
    occ.gender = occupant.Gender;
    occ.createdOn = occupant.CreatedOn;
    occ.updatedOn = occupant.UpdatedOn
    occ.active = occupant.Active;
    occ.notes = occupant.Notes;
    return occ;
  }

    getOccupants(): Observable<Occupant[]> {
    this.loggerService.log(`Getting Occupants...`);
    return this.http.get(this.occupantsUrl)
      .map((response) => {
        return response.json().map(this.fixOccupant);
        //return response.json() as Occupant[];
      })
      .do((Occupants) => {
        this.loggerService.log(`Got ${Occupants.length} Occupants.`);
      })
      .catch((error) => {
        return Observable.throw(`Error accessing api: ${this.occupantsUrl}\n${error}`);
      });
  }

  getOccupant(id: number): Observable<Occupant> {
    let api = this.occupantsUrl+'/'+id;
    return this.http.get(api)
      .map((response) => {
        return response.json() as Occupant;
      })
      .do((Occupant) => {
        this.loggerService.log(`Got Occupant.`);
      })
      .catch((error) => {
        return Observable.throw(`Error accessing api: ${api}`)
      })
  }

  getOccupantsByLocation(locationId: number): Observable<Occupant[]> {
    this.loggerService.log(`Getting Occupants by location...`);
    let api = this.locationService.getLocationsUrl() + `/${locationId}/occupants`;
    return this.http.get(api)
      .map((response) => {
        return response.json().map(this.fixOccupant);
        //return response.json() as Occupant[];
      })
      .do((Occupants) => {
        this.loggerService.log(`Got ${Occupants.length} Occupants.`);
      })
      .catch((error) => {
        return Observable.throw(`Error accessing api: ${this.occupantsUrl}\n${error}`);
      });
  }

  createOccupant(occupant: Occupant): Observable<Occupant> {
    let api = this.occupantsUrl;
    this.loggerService.log('Creating occupant...');
    console.log(occupant);
    return this.http.post(api, occupant)
      .map((response) => {
        return response.json() as Occupant;
      })
      .do((occupant) => {
        this.loggerService.log(`Occupant created.`);
      })
      .catch((error) => {
        return Observable.throw(`Error creating occupant: ${occupant.name}`)
      })
  }

  updateOccupant(occupant: Occupant): Observable<Occupant> {
    let api = this.occupantsUrl+'/'+occupant.id;
    this.loggerService.log('Updating occupant...');
    return this.http.put(api, occupant)
      .map((response) => {
        return response.json() as Occupant;
      })
      .do((occupant) => {
        this.loggerService.log(`Occupant updated.`);
      })
      .catch((error) => {
        return Observable.throw(`Error updating occupant: id - ${occupant.id}`)
      })
  }

}
