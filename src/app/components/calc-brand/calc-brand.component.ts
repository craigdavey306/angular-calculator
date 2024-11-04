import { UpperCasePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'calc-brand',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './calc-brand.component.html',
  styleUrl: './calc-brand.component.scss',
})
export class CalcBrandComponent {
  brand = input.required<string>();
}
