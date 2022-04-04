import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m=>m.DirectivesModule)},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
