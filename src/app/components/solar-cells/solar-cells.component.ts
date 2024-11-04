import { Component } from '@angular/core';

const SOLAR_CELL_COUNT = 4;

@Component({
  selector: 'calc-solar-cells',
  standalone: true,
  imports: [],
  templateUrl: './solar-cells.component.html',
  styleUrl: './solar-cells.component.scss',
})
export class SolarCellsComponent {
  solarCells = Array<string>(SOLAR_CELL_COUNT).fill('');
}
