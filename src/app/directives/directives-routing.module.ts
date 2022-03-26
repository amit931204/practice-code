import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';

const routes: Routes = [
  {path: '', redirectTo: 'ngif', pathMatch: 'full'},
  {path: 'ngif', component: NgifComponent},
  {path: 'ngfor', component: NgforComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
