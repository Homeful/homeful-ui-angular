import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupantDeleteComponent } from './occupant-delete.component';

describe('OccupantDeleteComponent', () => {
  let component: OccupantDeleteComponent;
  let fixture: ComponentFixture<OccupantDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupantDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupantDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
