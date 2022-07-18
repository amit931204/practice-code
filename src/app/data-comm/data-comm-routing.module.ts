import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentDataComponent } from './parent-data/parent-data.component';

const routes: Routes = [
  {path: '', redirectTo: 'parent-data', pathMatch: 'full'},
  {path: 'parent-data', component: ParentDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataCommRoutingModule { }
