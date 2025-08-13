import { Component, output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-details-capture-reactive',
  imports: [],
  templateUrl: './student-details-capture-reactive.html',
  styleUrl: './student-details-capture-reactive.scss',
})
export class StudentDetailsCaptureReactive {
  studentDetailsSubmit = output<Student>();

  onSubmit(studentDetails: Student) {
    this.studentDetailsSubmit.emit(studentDetails);
  }
}
