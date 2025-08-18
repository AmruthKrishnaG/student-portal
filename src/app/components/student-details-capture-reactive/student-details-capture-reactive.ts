import { Component, inject, OnInit, output } from '@angular/core';
import { Student } from '../../models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

export function rangeValidator(formControl: FormControl) {
  const marks = formControl.value;
  if (marks < 0 || marks > 100) {
    return {
      range: true,
    };
  }
  return null;
}

@Component({
  selector: 'app-student-details-capture-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './student-details-capture-reactive.html',
  styleUrl: './student-details-capture-reactive.scss',
})
export class StudentDetailsCaptureReactive implements OnInit {
  studentDetailsSubmit = output<Student>();
  removeThisArray: number[] = [];

  private fb = inject(FormBuilder);
  studentForm!: FormGroup;

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
      group: ['', Validators.required],
      marks: [0, [Validators.required, rangeValidator]],
    });
  }

  onSubmit() {
    this.studentDetailsSubmit.emit(this.studentForm.value);
  }
}
