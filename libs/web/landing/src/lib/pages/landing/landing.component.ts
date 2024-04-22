import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartsComponent } from '@fermentation-app/charts';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [CommonModule, ChartsComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
