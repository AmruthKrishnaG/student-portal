import { GroupFilterPipe } from './group-filter-pipe';
import { Student } from '../models';

describe('GroupFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new GroupFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('test for group filtering', () => {
    const pipe = new GroupFilterPipe();

    const students: Student[] = [
      {
        id: '1',
        name: 'John',
        marks: 70,
        group: 'science',
        gender: 'male',
        attributes: ['Music', 'Football'],
      },
      {
        id: '2',
        name: 'Peter',
        marks: 80,
        group: 'commerce',
        gender: 'male',
      },
      {
        id: '3',
        name: 'Mary',
        marks: 90,
        group: 'science',
        gender: 'female',
        attributes: ['Crafts', 'Guitar'],
      },
    ];
    expect(pipe.transform(students, 'commerce').length).toEqual(1);
  });
});
