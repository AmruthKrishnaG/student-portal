import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { StudentsList } from './components/students-list/students-list';
import { authGuard } from './guards/auth-guard';
import { Layout } from './components/layout/layout';

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
    path: '',
    component: Layout,
    children: [
      {
        path: 'students-list',
        component: StudentsList,
        canActivate: [authGuard],
      },
    ],
  },
];
