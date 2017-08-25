import { Injectable } from '@angular/core';
import { Subject }        from 'rxjs/Subject';
import { Router } from '@angular/router';
import { OccupantService } from '../occupant/occupant.service';
import { Location } from '../location/model';

@Injectable()
export class PopupService {
    private modalIsActive: boolean = false;
    private modalIsOpen: boolean = false;

    constructor(private occupantService: OccupantService,
                            private router: Router) {
     }

     isOpen() {
         return this.modalIsOpen;
     }

    open() {
        if (this.modalIsOpen) {
            //this.close();
        }
    
        if (!this.modalIsActive) {
            console.log('activating modal');
            (<any>$('.modal')).modal();
            this.modalIsActive = true;
        }
        console.log('opening popup');
        setTimeout(function() {
            (<any>$('#popup')).modal('open');
            this.modalIsOpen = true;
        }, 500);
    }

    close() {
        this.modalIsOpen = false;
        console.log('closing popup');
        (<any>$('#popup')).modal('close');
    }
}
