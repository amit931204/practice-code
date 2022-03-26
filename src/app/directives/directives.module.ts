import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { CommanModule } from '../comman/comman.module';


@NgModule({
  declarations: [
    NgifComponent,
    NgforComponent
  ],
  imports: [
    CommonModule,
    CommanModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
