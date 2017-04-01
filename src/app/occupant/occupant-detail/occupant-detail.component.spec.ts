import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantDetailComponent } from './occupant-detail.component';

describe('OccupantDetailComponent', () => {
  let component: OccupantDetailComponent;
  let fixture: ComponentFixture<OccupantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
