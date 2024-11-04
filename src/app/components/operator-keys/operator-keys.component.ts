import { Component, inject, input, OnDestroy, output } from '@angular/core';
import { KeyModel } from '../../models';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'calc-operator-keys',
  standalone: true,
  imports: [],
  templateUrl: './operator-keys.component.html',
  styleUrl: './operator-keys.component.scss',
})
export class OperatorKeysComponent implements OnDestroy {
  operatorKeys = input.required<ReadonlyArray<KeyModel>>();
  selectedOperation = output<KeyModel>();
  isOn = true;

  private calculatorService = inject(CalculatorService);
  private isOnSubscription = this.calculatorService.isOn$.subscribe(
    (toggleOnOffEvent) => {
      this.isOn = toggleOnOffEvent;
    }
  );

  ngOnDestroy(): void {
    this.isOnSubscription.unsubscribe();
  }

  onPressKey(key: KeyModel): void {
    this.selectedOperation.emit(key);
  }
}
