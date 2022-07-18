import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart} from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  canvas: any;
  ctx:any;

  constructor() { }

  ngOnInit(): void {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
          datasets: [{
              label: 'Status',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "#e63564",
              borderColor: "#e63564",
              borderWidth: 1
          }]
      },
      options: {
          // scales: {
          //     y: {
          //         beginAtZero: true
          //     }
          // }
      }
  });
  }

  

}
