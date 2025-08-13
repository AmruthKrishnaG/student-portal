import { Component, inject } from '@angular/core';
import { GroupFilterPipe } from '../../pipes/group-filter-pipe';
import { Group, Student } from '../../models';
import { StudentService } from '../../services/student-service';
import { StudentTile } from '../student-tile/student-tile';
import { StudentDetailsCapture } from '../student-details-capture/student-details-capture';

@Component({
  selector: 'app-students-list',
  imports: [GroupFilterPipe, StudentTile, StudentDetailsCapture],
  templateUrl: './students-list.html',
  styleUrl: './students-list.scss',
})
export class StudentsList {
  private studentsService = inject(StudentService);

  selectedGroup: Group = 'commerce';
  average: number = 0;
  students: Student[] = [];

  newStudent: Student = {
    name: 'Jacob',
    marks: 60,
    group: 'commerce',
    gender: 'male',
  };

  showModal = true;

  constructor() {
    this.students = this.studentsService.getStudents();
    this.updateClassAverage();

    // setTimeout(() => {
    //   this.students.push(this.newStudent);
    //   this.students.push(this.newStudent);
    //   this.students.push(this.newStudent);
    //   this.updateClassAverage();
    // }, 2000);
  }
  updateClassAverage(): void {
    this.average = this.studentsService.calculateAverage(this.students);
  }
}
