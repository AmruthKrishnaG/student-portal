import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsCaptureTemplate } from './student-details-capture-template';

describe('StudentDetailsCaptureTemplate', () => {
  let component: StudentDetailsCaptureTemplate;
  let fixture: ComponentFixture<StudentDetailsCaptureTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsCaptureTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsCaptureTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
