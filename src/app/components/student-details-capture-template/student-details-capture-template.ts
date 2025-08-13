import { Component, output } from '@angular/core';
import { Student } from '../../models';

@Component({
  selector: 'app-student-details-capture-template',
  imports: [],
  templateUrl: './student-details-capture-template.html',
  styleUrl: './student-details-capture-template.scss',
})
export class StudentDetailsCaptureTemplate {
  studentDetailsSubmit = output<Student>();

  onSubmit(studentDetails: Student) {
    this.studentDetailsSubmit.emit(studentDetails);
  }
}
