import { Component, output } from '@angular/core';
import { Student } from '../../models';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-student-details-capture-template',
  imports: [FormsModule],
  templateUrl: './student-details-capture-template.html',
  styleUrl: './student-details-capture-template.scss',
})
export class StudentDetailsCaptureTemplate {
  studentDetailsSubmit = output<Student>();
  student = {
    name: '',
    group: '',
    gender: 'female',
    marks: undefined,
  };

  submitDetails(form: NgForm) {
    this.studentDetailsSubmit.emit(form.value);
  }
}
