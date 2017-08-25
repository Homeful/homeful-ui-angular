import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantAddComponent } from './occupant-add.component';

describe('OccupantAddComponent', () => {
  let component: OccupantAddComponent;
  let fixture: ComponentFixture<OccupantAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
