import { Component, OnInit } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { PopupService } from './popup.service';

@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  name: string;
  subscription: Subscription;

  constructor(
    private popupService: PopupService) { 
      this.subscription = popupService.nameChange.subscribe((value) => { 
      this.name = value; 
    });
    }

  ngOnInit() {
    (<any>$('.modal')).modal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
