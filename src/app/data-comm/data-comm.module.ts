import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataCommRoutingModule } from './data-comm-routing.module';
import { ParentDataComponent } from './parent-data/parent-data.component';
import { CommanModule } from '../comman/comman.module';


@NgModule({
  declarations: [
    ParentDataComponent
  ],
  imports: [
    CommonModule,
    CommanModule,
    DataCommRoutingModule
  ]
})
export class DataCommModule { }
