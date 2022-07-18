import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-charts',
  templateUrl: './my-charts.component.html',
  styleUrls: ['./my-charts.component.css']
})
export class MyChartsComponent implements OnInit {
  canvas: any;
  ctx: any;
  
  constructor() { }

  ngOnInit(): void {
    
  
  }
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Current Vallue',
              data: [12, 20, 40, 50, 33, 55],
              backgroundColor: "#e63564",
              borderColor: "#e63564",
              fill: true,
          }],
          labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019', 'May 2019', 'June 2019']
      },
  });
  }

}
