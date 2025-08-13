import { Pipe, PipeTransform } from '@angular/core';
import { Student, Group } from '../models';

@Pipe({
  name: 'groupFilter',
})
export class GroupFilterPipe implements PipeTransform {
  transform(students: Student[], selectedGroup: Group): Student[] {
    return students;
  }
}
