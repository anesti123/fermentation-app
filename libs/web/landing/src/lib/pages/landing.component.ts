import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}