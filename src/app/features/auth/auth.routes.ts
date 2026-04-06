import type { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout').then((m) => m.AuthLayout),
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login-page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register-page').then((m) => m.RegisterPage),
      },
    ],
  },
];
