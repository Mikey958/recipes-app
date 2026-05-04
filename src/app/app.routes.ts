import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    loadComponent: () => import('./core/layout/main-layout/main.layout').then((m) => m.MainLayout),
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        loadChildren: () => import('./features/main/main.routes').then((m) => m.MAIN_ROUTES),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./features/profile/profile.routes').then((m) => m.PROFILE_ROUTES),
      },
    ],
  },
  {
    title: 'Страница не найдена',
    path: '**',
    loadComponent: () =>
      import('./core/pages/not-found/not-found.page').then((m) => m.NotFoundPage),
  },
];
