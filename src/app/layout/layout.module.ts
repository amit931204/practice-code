import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommanModule } from '../comman/comman.module';
import { CardComponent } from './card/card.component';
import { MyChartsComponent } from './my-charts/my-charts.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CardComponent,
    MyChartsComponent
  ],
  imports: [
    CommonModule,
    CommanModule,
    LayoutRoutingModule,
  ],
  providers:[]
})
export class LayoutModule { }
