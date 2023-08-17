import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubtypesListComponent } from './subtypes-list/subtypes-list.component';
import { SubtypesDetailsComponent } from './subtypes-details/subtypes-details.component';


const routes: Routes = [
  {
    path: '',
    component: SubtypesListComponent
  },
  {
    path: ':id',
    component: SubtypesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubtypesPageRoutingModule {}
