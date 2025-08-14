import { Injectable } from '@angular/core';
import { Student } from '../models';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: Student[] = [
    {
      name: 'John',
      marks: 70,
      group: 'science',
      gender: 'male',
      attributes: ['Music', 'Football'],
    },
    {
      name: 'Peter',
      marks: 80,
      group: 'commerce',
      gender: 'male',
    },
    {
      name: 'Mary',
      marks: 90,
      group: 'science',
      gender: 'female',
      attributes: ['Crafts', 'Guitar'],
    },
  ];

  getStudents(): Student[] {
    return this.students;
  }

  calculateAverage(students: Student[]) {
    return students.reduce((sum, it) => sum + it.marks, 0) / students.length;
  }
}
