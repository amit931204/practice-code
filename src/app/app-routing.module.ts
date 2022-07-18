import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './data-transfer/parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./layout/layout.module').then(m=>m.LayoutModule)},
  { path: 'directives', loadChildren: () => import('./directives/directives.module').then(m=>m.DirectivesModule)},
  { path: 'data-communication', loadChildren: ()=>import('./data-comm/data-comm.module').then(m=>m.DataCommModule)},
  { path: 'all-charts', loadChildren:()=>import('./all-charts/all-charts.module').then(m=>m.AllChartsModule)},
  { path: 'data-transfer', component: ParentComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
