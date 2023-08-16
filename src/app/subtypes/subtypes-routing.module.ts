import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubtypesPage } from './subtypes.page';

const routes: Routes = [
  {
    path: '',
    component: SubtypesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtypesPageRoutingModule {}
