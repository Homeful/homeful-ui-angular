import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantEditComponent } from './occupant-edit.component';

describe('OccupantEditComponent', () => {
  let component: OccupantEditComponent;
  let fixture: ComponentFixture<OccupantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
