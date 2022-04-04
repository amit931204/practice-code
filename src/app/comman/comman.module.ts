import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanRoutingModule } from './comman-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  
  imports: [
    CommonModule,
    CommanRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CommanModule { }
