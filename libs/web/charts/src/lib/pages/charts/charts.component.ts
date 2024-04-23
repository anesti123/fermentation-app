import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { FermentationDataService } from '../../data-access/fermentation-data.service';

@Component({
  selector: 'lib-charts',
  standalone: true,
  imports: [CommonModule, CanvasJSAngularChartsModule],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss',
})
export class ChartsComponent {
  fermentationData: any[] = [];
  chartOptions: any = {
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
    data: [],
  };

  constructor(private fermentationDataService: FermentationDataService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.fermentationDataService.getCachedDataObservable().subscribe((data) => {
      this.updateChartOptions(data);
    });
    this.fermentationDataService.fetchData();
  }

  updateChartOptions(data: any): void {
    if (data && data.densities && data.measuredAts && data.temperatures) {
      this.chartOptions = {
        animationEnabled: true,
        zoomEnabled: true,
        exportEnabled: true,
        theme: 'light2',
        axisY: {
          title: 'sg', // Change Y Axis Label to 'sg'
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
          title: 'abv', // Change Y2 Axis Label to 'abv'
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
            name: 'Densities',
            color: '#A020F0',
            lineThickness: 3,
            dataPoints: data.densities.map(
              (density: number, index: number) => ({
                x: new Date(data.measuredAts[index] * 1000), // Assuming measuredAts are in seconds
                y: density,
                markerSize: 5, // Adjust the marker size as needed
              })
            ),
          },
          {
            type: 'line',
            name: 'Temperature',
            axisYType: 'secondary',
            markerType: 'square',
            lineThickness: 3,
            color: '#E27429',
            dataPoints: data.temperatures.map(
              (temperature: number, index: number) => ({
                x: new Date(data.measuredAts[index] * 1000), // Assuming measuredAts are in seconds
                y: temperature,
                markerSize: 5, // Adjust the marker size as needed
              })
            ),
          },
        ],
      };
    } else {
      console.error('Invalid data format:', data);
    }
  }
}
