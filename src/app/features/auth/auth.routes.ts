import type { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadComponent: () => import('./layouts/auth-layout/auth.layout').then((m) => m.AuthLayout),
    children: [
      {
        title: 'Вход',
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then((m) => m.LoginPage),
      },
      {
        title: 'Регистрация',
        path: 'register',
        loadComponent: () => import('./pages/register/register.page').then((m) => m.RegisterPage),
      },
      {
        title: 'Восстановление пароля',
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/forgot-password/forgot-password.page').then((m) => m.ForgotPasswordPage),
      },
    ],
  },
];
