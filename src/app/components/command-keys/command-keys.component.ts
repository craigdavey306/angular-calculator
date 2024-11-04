import { Component, input, output, inject, OnDestroy } from '@angular/core';
import { KeyModel } from '../../models';
import { UpperCasePipe } from '@angular/common';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'calc-command-keys',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './command-keys.component.html',
  styleUrl: './command-keys.component.scss',
})
export class CommandKeysComponent implements OnDestroy {
  commandKeys = input.required<ReadonlyArray<KeyModel>>();
  selectedCommand = output<KeyModel>();
  isOn = true;

  private calculator = inject(CalculatorService);
  private isOnSubscription = this.calculator.isOn$.subscribe(
    (toggleOnOffEvent) => {
      this.isOn = toggleOnOffEvent;
    }
  );

  ngOnDestroy(): void {
    this.isOnSubscription.unsubscribe();
  }

  onPressKey(key: KeyModel): void {
    if (this.isOn || key.internal === 'on-off') {
      this.selectedCommand.emit(key);
    }
  }
}
