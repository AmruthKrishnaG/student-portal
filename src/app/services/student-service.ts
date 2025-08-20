import { inject, Injectable } from '@angular/core';
import { Student } from '../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private http = inject(HttpClient);
  baseURL = 'http://localhost:3000/students';

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.baseURL);
  }

  addStudent(studentDetails: Student) {
    const id = Math.floor(Math.random() * 901) + 100;
    return this.http.post(this.baseURL, {
      ...studentDetails,
      id: String(id),
    });
  }

  deleteStudent(studentDetails: Student) {
    return this.http.delete(`${this.baseURL}/${studentDetails.id}`);
  }

  calculateAverage(students: Student[]) {
    return students.reduce((sum, it) => sum + it.marks, 0) / students.length;
  }
}
