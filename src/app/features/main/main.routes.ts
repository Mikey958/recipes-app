import { type Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    title: 'Главная',
    component: MainPage,
  },
];
