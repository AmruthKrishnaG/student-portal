import { Pipe, PipeTransform } from '@angular/core';
import { Student, Group } from '../models';

@Pipe({
  name: 'groupFilter',
})
export class GroupFilterPipe implements PipeTransform {
  transform(students: Student[], selectedGroup: Group | undefined): Student[] {
    if (selectedGroup) {
      return students.filter((student) => student.group === selectedGroup);
    }
    return students;
  }
}
