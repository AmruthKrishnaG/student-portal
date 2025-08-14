import { Component, inject } from '@angular/core';
import { GroupFilterPipe } from '../../pipes/group-filter-pipe';
import { Group, Student } from '../../models';
import { StudentService } from '../../services/student-service';
import { StudentTile } from '../student-tile/student-tile';
import { StudentDetailsCaptureTemplate } from '../student-details-capture-template/student-details-capture-template';
import { StudentDetailsCaptureReactive } from '../student-details-capture-reactive/student-details-capture-reactive';

@Component({
  selector: 'app-students-list',
  imports: [
    GroupFilterPipe,
    StudentTile,
    StudentDetailsCaptureTemplate,
    StudentDetailsCaptureReactive,
  ],
  templateUrl: './students-list.html',
  styleUrl: './students-list.scss',
})
export class StudentsList {
  private studentsService = inject(StudentService);

  selectedGroup: Group | undefined = undefined;
  average: number = 0;
  students: Student[] = [];

  showAddStudentModal = false;

  constructor() {
    this.students = this.studentsService.getStudents();
    this.updateClassAverage();
  }

  updateClassAverage(): void {
    this.average = this.studentsService.calculateAverage(this.students);
  }

  addStudent(studentDetails: Student) {
    if (studentDetails?.name) {
      this.showAddStudentModal = false;
      this.students.push(studentDetails);
      this.updateClassAverage();
    }
  }
}
