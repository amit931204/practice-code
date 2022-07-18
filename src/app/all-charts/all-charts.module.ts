import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllChartsRoutingModule } from './all-charts-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { CommanModule } from '../comman/comman.module';


@NgModule({
  declarations: [
    BarChartComponent
  ],
  imports: [
    CommonModule,
    CommanModule,
    AllChartsRoutingModule
  ]
})
export class AllChartsModule { }
