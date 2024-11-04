import { Component, inject, input, OnDestroy, output } from '@angular/core';
import { KeyModel } from '../../models';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'calc-numeric-keys',
  standalone: true,
  imports: [],
  templateUrl: './numeric-keys.component.html',
  styleUrl: './numeric-keys.component.scss',
})
export class NumericKeysComponent implements OnDestroy {
  rows = input.required<ReadonlyArray<ReadonlyArray<KeyModel>>>();
  selectedNumber = output<KeyModel>();
  isOn = true;

  private calculatorService = inject(CalculatorService);
  private isOnSubscription = this.calculatorService.isOn$.subscribe(
    (toggleOnOffEvent) => (this.isOn = toggleOnOffEvent)
  );

  ngOnDestroy(): void {
    this.isOnSubscription.unsubscribe();
  }

  onPressKey(key: KeyModel): void {
    this.selectedNumber.emit(key);
  }
}
