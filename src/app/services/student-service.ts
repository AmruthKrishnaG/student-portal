import { inject, Injectable } from '@angular/core';
import { Student } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students');
  }

  addStudent(studentDetails: Student) {
    const id = Math.floor(Math.random() * 901) + 100;
    return this.http.post('http://localhost:3000/students', {
      ...studentDetails,
      id: String(id),
    });
  }

  deleteStudent(studentDetails: Student) {
    return this.http.delete(
      `http://localhost:3000/students/${studentDetails.id}`
    );
  }

  calculateAverage(students: Student[]) {
    return students.reduce((sum, it) => sum + it.marks, 0) / students.length;
  }
}
