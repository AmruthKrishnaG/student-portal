import { Component, Input } from '@angular/core';
import { Student } from '../../models';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-student-tile',
  imports: [UpperCasePipe],
  templateUrl: './student-tile.html',
  styleUrl: './student-tile.scss',
})
export class StudentTile {
  @Input() student!: Student;
}
