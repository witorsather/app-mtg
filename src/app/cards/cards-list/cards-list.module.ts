import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsListPageRoutingModule } from './cards-list-routing.module';

import { CardsListPage } from './cards-list.page';
import { CardsService } from '../cards.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsListPageRoutingModule
  ],
  declarations: [CardsListPage],
  providers: [CardsService]
})
export class CardsListPageModule {}
