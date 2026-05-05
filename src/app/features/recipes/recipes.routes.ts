import { type Routes } from '@angular/router';

export const RECIPES_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/recipes/recipes.page').then((m) => m.RecipesPage),
  },
  {
    path: 'recipe/:id',
    loadComponent: () => import('./pages/recipe/recipe.page').then((m) => m.RecipePage),
  },
];
