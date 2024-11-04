import { Component, input } from '@angular/core';

@Component({
  selector: 'calc-display',
  standalone: true,
  imports: [],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss',
})
export class DisplayComponent {
  equation = input.required<string>();
}
