import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubtypesPageRoutingModule } from './subtypes-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubtypesPageRoutingModule
  ],
  
})
export class SubtypesPageModule {}
