import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./features/main/main.routes').then((m) => m.MAIN_ROUTES),
  },
  {
    title: 'Страница не найдена',
    path: '**',
    loadComponent: () =>
      import('./core/pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
