import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailsAssignmentComponent } from './display-details-assignment.component';

describe('DisplayDetailsAssignmentComponent', () => {
  let component: DisplayDetailsAssignmentComponent;
  let fixture: ComponentFixture<DisplayDetailsAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayDetailsAssignmentComponent]
    });
    fixture = TestBed.createComponent(DisplayDetailsAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
