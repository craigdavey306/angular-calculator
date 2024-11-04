import { Component, input } from '@angular/core';

@Component({
  selector: 'calc-model',
  standalone: true,
  imports: [],
  templateUrl: './calc-model.component.html',
  styleUrl: './calc-model.component.scss',
})
export class CalcModelComponent {
  model = input<string | undefined>();
}
