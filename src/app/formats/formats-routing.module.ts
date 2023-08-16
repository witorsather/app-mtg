import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatsPage } from './formats.page';

const routes: Routes = [
  {
    path: '',
    component: FormatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatsPageRoutingModule {}
