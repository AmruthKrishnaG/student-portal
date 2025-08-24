import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTile } from './student-tile';

describe('StudentTile', () => {
  let component: StudentTile;
  let fixture: ComponentFixture<StudentTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTile],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentTile);
    component = fixture.componentInstance;
    component.student = {
      id: '2',
      name: 'Peter',
      marks: 80,
      group: 'commerce',
      gender: 'male',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
