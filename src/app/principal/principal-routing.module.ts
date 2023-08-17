import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ApresentacaoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cards',
    loadChildren: () => import('../cards/cards-routing.module').then( m => m.CardsPageRoutingModule)
  },
  {
    path: 'formats',
    loadChildren: () => import('../formats/formats-routing.module').then( m => m.FormatsPageRoutingModule)
  },
  {
    path: 'sets',
    loadChildren: () => import('../sets/sets-routing.module').then( m => m.SetsPageRoutingModule)
  },
  {
    path: 'subtypes',
    loadChildren: () => import('../subtypes/subtypes-routing.module').then( m => m.SubtypesPageRoutingModule)
  },
  {
    path: 'types',
    loadChildren: () => import('../types/types-routing.module').then( m => m.TypesPageRoutingModule)
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
