import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'sets',
    loadChildren: () => import('./sets/sets.module').then( m => m.SetsPageModule)
  },
  {
    path: 'types',
    loadChildren: () => import('./types/types.module').then( m => m.TypesPageModule)
  },
  {
    path: 'subtypes',
    loadChildren: () => import('./subtypes/subtypes.module').then( m => m.SubtypesPageModule)
  },
  {
    path: 'formats',
    loadChildren: () => import('./formats/formats.module').then( m => m.FormatsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
