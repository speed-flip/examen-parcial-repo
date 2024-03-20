import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'pokedex-page',
    loadComponent: () => import('./pokedex-page/pokedex-page.page').then( m => m.PokedexPagePage)
  },
];
