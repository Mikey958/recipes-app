import { type Routes } from '@angular/router';

export const PROFILE_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage),
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./children/pages/profile-main/profile-main.page').then((m) => m.ProfileMainPage),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('./children/pages/profile-favorites/profile-favorites.page').then(
            (m) => m.ProfileFavoritesPage,
          ),
      },
      {
        path: 'subscribers',
        loadComponent: () =>
          import('./children/pages/profile-subscribers/profile-subscribers.page').then(
            (m) => m.ProfileSubscribersPage,
          ),
      },
      {
        path: 'notifications',
        loadComponent: () =>
          import('./children/pages/profile-notifications/profile-notifications.page').then(
            (m) => m.ProfileNotificationsPage,
          ),
      },
    ],
  },
];
