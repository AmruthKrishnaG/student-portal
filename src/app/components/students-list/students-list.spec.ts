import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsList } from './students-list';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('StudentsList', () => {
  let component: StudentsList;
  let fixture: ComponentFixture<StudentsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsList],
      providers: [provideHttpClientTesting(), provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
