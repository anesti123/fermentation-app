import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartsComponent } from '@fermentation-app/charts';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [CommonModule, ChartsComponent, NavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
