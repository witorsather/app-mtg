import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypesListComponent } from './types-list/types-list.component';
import { TypesDetailsComponent } from './types-details/types-details.component';


const routes: Routes = [
  {
    path: '',
    component: TypesListComponent
  },
  {
    path: ':id',
    component: TypesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesPageRoutingModule {}
