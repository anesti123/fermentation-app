import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'lib-charts',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  chartOptions = {
    animationEnabled: true,
    theme: 'light2',

    axisY: {
      title: 'X Axis Label',
      labelFontColor: '#000000',
      lineColor: '#000000',
      lineThickness: 0,
      crosshair: {
        enabled: true,
        snapToDataPoint: true,
      },
    },
    toolTip: {
      shared: true,
    },
    axisY2: {
      title: 'X Axis Label',
      labelFontColor: '#000000',
      lineColor: '#000000',
      lineThickness: 0,
      crosshair: {
        enabled: true,
      },
    },
    data: [
      {
        type: 'line',
        name: 'Total Visit',
        color: '#A020F0',
        lineThickness: 3,
        dataPoints: [
          { x: new Date(2021, 1, 1), y: 15.0 },
          { x: new Date(2021, 2, 1), y: 14.5 },
          { x: new Date(2021, 3, 1), y: 14.0 },
          { x: new Date(2021, 4, 1), y: 14.5 },
          { x: new Date(2021, 5, 1), y: 14.75 },
          { x: new Date(2021, 6, 1), y: 15.2 },
          { x: new Date(2021, 8, 1), y: 15.8 },
          { x: new Date(2021, 8, 1), y: 17.5 },
        ],
      },
      {
        type: 'line',
        axisYType: 'secondary',
        markerType: 'square',
        lineThickness: 3,
        color: '#E27429',
        dataPoints: [
          { x: new Date(2021, 2, 1), y: 41.0 },
          { x: new Date(2021, 3, 1), y: 43.5 },
          { x: new Date(2021, 4, 1), y: 41.0 },
          { x: new Date(2021, 6, 1), y: 45.5 },
          { x: new Date(2021, 7, 1), y: 47.55 },
          { x: new Date(2021, 6, 1), y: 45.0 },
          { x: new Date(2021, 8, 1), y: 40.7 },
          { x: new Date(2021, 9, 1), y: 37.0 },
        ],
      },
    ],
  };
}
