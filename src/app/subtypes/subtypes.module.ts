import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtypesPageRoutingModule } from './subtypes-routing.module';

import { SubtypesPage } from './subtypes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtypesPageRoutingModule
  ],
  declarations: [SubtypesPage]
})
export class SubtypesPageModule {}
