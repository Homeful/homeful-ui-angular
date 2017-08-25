/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OccupantComponent } from './occupant.component';

describe('OccupantComponent', () => {
    let component: OccupantComponent;
    let fixture: ComponentFixture<OccupantComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OccupantComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OccupantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
