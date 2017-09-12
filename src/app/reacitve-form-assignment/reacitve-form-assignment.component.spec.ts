import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReacitveFormAssignmentComponent } from './reacitve-form-assignment.component';

describe('ReacitveFormAssignmentComponent', () => {
  let component: ReacitveFormAssignmentComponent;
  let fixture: ComponentFixture<ReacitveFormAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReacitveFormAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReacitveFormAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
