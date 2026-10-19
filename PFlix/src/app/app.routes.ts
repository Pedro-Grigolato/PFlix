import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search').then((m) => m.SearchComponent),
  },
  {
    path: 'details/:type/:id',
    loadComponent: () =>
      import('./pages/details/details').then((m) => m.DetailsComponent),
  },
  {
    path: 'person/:id',
    loadComponent: () =>
      import('./pages/person/person').then((m) => m.PersonComponent),
  },
  { path: '**', redirectTo: 'home' },
];