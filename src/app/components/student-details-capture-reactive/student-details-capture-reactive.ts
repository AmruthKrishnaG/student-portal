import { Component, inject, OnInit, output } from '@angular/core';
import { Student } from '../../models';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
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

  private fb = inject(FormBuilder);
  studentForm!: FormGroup;

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      gender: ['', Validators.required],
      group: ['', Validators.required],
      marks: [0, [Validators.required, rangeValidator]],
      attributes: this.fb.array([]),
    });
  }

  getAttributeArray() {
    return this.studentForm.get('attributes') as FormArray;
  }

  addAttribute() {
    this.getAttributeArray().push(this.fb.control('', Validators.required));
  }

  removeAttribute(index: number) {
    this.getAttributeArray().removeAt(index);
  }

  onSubmit() {
    this.studentDetailsSubmit.emit(this.studentForm.value);
  }
}
