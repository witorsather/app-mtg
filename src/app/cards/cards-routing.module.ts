import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsListComponent } from './cards-list/cards-list.component';
import { CardsDetailsComponent } from './cards-details/cards-details.component';
import { resolve } from 'dns';
import { CardsResolver } from './cards.resolver';

const routes: Routes = [
  {
    path: '',
    component: CardsListComponent,
    resolve: {
      cardsData: CardsResolver
    }
  },
  {
    path: ':id',
    component: CardsDetailsComponent,
    resolve: {
      cardsResolver: CardsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
