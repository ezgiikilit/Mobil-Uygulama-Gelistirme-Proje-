import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemelPage } from './temel.page';

const routes: Routes = [
  {
    path: '',
    component: TemelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemelPageRoutingModule {}
