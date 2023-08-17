import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SetsListComponent } from './sets-list/sets-list.component';
import { SetsDetailsComponent } from './sets-details/sets-details.component';


const routes: Routes = [
  {
    path: '',
    component: SetsListComponent
  },
  {
    path: ':id',
    component: SetsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetsPageRoutingModule {}
