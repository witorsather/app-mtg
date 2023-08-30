import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsDetailPage } from './cards-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CardsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsDetailPageRoutingModule {}
