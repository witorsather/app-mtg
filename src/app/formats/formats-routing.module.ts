import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormatsListComponent } from './formats-list/formats-list.component';
import { FormatsDetailsComponent } from './formats-details/formats-details.component';



const routes: Routes = [
  {
    path: '',
    component: FormatsListComponent
  },
  {
    path: 'detail',
    component: FormatsDetailsComponent
  },
  {
    path: ':id',
    component: FormatsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatsPageRoutingModule {}
