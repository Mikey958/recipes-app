import { type Routes } from '@angular/router';
import { MainLayout } from '../../core/layout/main-layout/main.layout';
import { MainPage } from './pages/main/main.page';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        title: 'Главная',
        path: 'main',
        component: MainPage,
      },
    ],
  },
];
