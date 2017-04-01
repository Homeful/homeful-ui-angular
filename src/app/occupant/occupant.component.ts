import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'occupant',
  templateUrl: './occupant.component.html',
  styleUrls: ['./occupant.component.css']
})
export class OccupantComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    (<any>$('.datepicker')).pickadate({
      selectMonths: true // Creates a dropdown to control month
    });
    (<any>$('select')).material_select();
  }

}
