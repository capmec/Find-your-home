import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: ` <p>housing-location works!</p> `,
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {}
