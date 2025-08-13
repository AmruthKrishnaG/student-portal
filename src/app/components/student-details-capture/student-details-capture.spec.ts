import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsCapture } from './student-details-capture';

describe('StudentDetailsCapture', () => {
  let component: StudentDetailsCapture;
  let fixture: ComponentFixture<StudentDetailsCapture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsCapture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsCapture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
