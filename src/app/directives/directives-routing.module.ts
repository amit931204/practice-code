import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';

const routes: Routes = [
  {path: '', redirectTo: 'ngif', pathMatch: 'full'},
  {path: 'ngif', component: NgifComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
