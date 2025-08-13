import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { StudentsList } from './components/students-list/students-list';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'students-list',
    component: StudentsList,
    canActivate: [authGuard],
  },
];
