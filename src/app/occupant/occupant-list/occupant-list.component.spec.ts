import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantListComponent } from './occupant-list.component';

describe('OccupantListComponent', () => {
    let component: OccupantListComponent;
    let fixture: ComponentFixture<OccupantListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ OccupantListComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OccupantListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
