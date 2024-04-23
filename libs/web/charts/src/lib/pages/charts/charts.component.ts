import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { LineChartOptions } from '../../config/line-chart-config';
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
  chartOptions = LineChartOptions;
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
        backgroundColor: '#fffcf3',
        theme: 'light2',
        axisY: {
          title: 'sg',
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
          title: 'abv',
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
            color: '#5a0f8c',
            lineThickness: 3,
            dataPoints: data.densities.map(
              (density: number, index: number) => ({
                x: new Date(data.measuredAts[index] * 1000), // Assuming measuredAts are in seconds
                y: density,
                markerSize: 5,
              })
            ),
          },
          {
            type: 'line',
            name: 'Temperature',
            axisYType: 'secondary',
            markerType: 'square',
            lineThickness: 3,
            color: '#f27405',
            dataPoints: data.temperatures.map(
              (temperature: number, index: number) => ({
                x: new Date(data.measuredAts[index] * 1000), // Assuming measuredAts are in seconds
                y: temperature,
                markerSize: 5,
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
