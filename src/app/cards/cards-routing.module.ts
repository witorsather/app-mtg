import { CardsDetailPageModule } from './cards-detail/cards-detail.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./cards-list/cards-list.module').then(m => m.CardsListPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./cards-detail/cards-detail.module').then(m => m.CardsDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}