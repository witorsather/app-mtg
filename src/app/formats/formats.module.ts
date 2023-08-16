import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatsPageRoutingModule } from './formats-routing.module';

import { FormatsPage } from './formats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatsPageRoutingModule
  ],
  declarations: [FormatsPage]
})
export class FormatsPageModule {}
