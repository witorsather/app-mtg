import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsDetailsComponent } from './cards-details/cards-details.component';

const routes: Routes = [
  {
    path: '',
    component: CardsListComponent
  },
  {
    path: 'detail',
    component: CardsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
