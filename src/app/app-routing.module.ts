import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'temel',
    loadChildren: () => import('./temel/temel.module').then( m => m.TemelPageModule)
  },
  {
    path: 'orta',
    loadChildren: () => import('./orta/orta.module').then( m => m.OrtaPageModule)
  },
  {
    path: 'ileri',
    loadChildren: () => import('./ileri/ileri.module').then( m => m.IleriPageModule)
  },
  {
    path: 'fire',
    loadChildren: () => import('./fire/fire.module').then( m => m.FirePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'test1',
    loadChildren: () => import('./test1/test1.module').then( m => m.Test1PageModule)
  },
  {
    path: 'test2',
    loadChildren: () => import('./test2/test2.module').then( m => m.Test2PageModule)
  },
  {
    path: 'cevapanahtari',
    loadChildren: () => import('./cevapanahtari/cevapanahtari.module').then( m => m.CevapanahtariPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
