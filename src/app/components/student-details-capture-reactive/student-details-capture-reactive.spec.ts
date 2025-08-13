import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailsCaptureReactive } from './student-details-capture-reactive';

describe('StudentDetailsCaptureReactive', () => {
  let component: StudentDetailsCaptureReactive;
  let fixture: ComponentFixture<StudentDetailsCaptureReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDetailsCaptureReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDetailsCaptureReactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
