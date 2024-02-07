import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories-routing.module').then((m) => m.CategoriesRoutingModule)
  },
];
