import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardsDetailPageRoutingModule } from './cards-detail-routing.module';

import { CardsDetailPage } from './cards-detail.page';
import { CardsService } from '../cards.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardsDetailPageRoutingModule
  ],
  declarations: [CardsDetailPage],
  providers: [CardsService]
})
export class CardsDetailPageModule {}
