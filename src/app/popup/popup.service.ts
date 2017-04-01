import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { OccupantService } from '../occupant/occupant.service';
import { Location } from '../location/model';

@Injectable()
export class PopupService {
  popupName: string;
  nameChange: Subject<string> = new Subject<string>();
  constructor(private occupantService: OccupantService) { }

  open(location: Location) {
    console.log('opening popup...');
    this.nameChange.next(location.name);
    this.occupantService.getOccupantsByLocation(location.id);
    (<any>$('#popup')).modal('open');
  }
}
