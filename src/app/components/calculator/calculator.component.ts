import { Component, inject, OnDestroy } from '@angular/core';
import { SolarCellsComponent } from '../solar-cells/solar-cells.component';
import { CalcBrandComponent } from '../calc-brand/calc-brand.component';
import { CalcModelComponent } from '../calc-model/calc-model.component';
import { DisplayComponent } from '../display/display.component';
import {
  DEFAULT_RESULT,
  COMMAND_KEYS,
  NUMERIC_KEYS,
  OPERATOR_KEYS,
} from '../../constants';
import { CommandKeysComponent } from '../command-keys/command-keys.component';
import { NumericKeysComponent } from '../numeric-keys/numeric-keys.component';
import { KeyModel } from '../../models';
import { OperatorKeysComponent } from '../operator-keys/operator-keys.component';
import { CalculatorService } from '../../services/calculator.service';

@Component({
  selector: 'calc-casio',
  standalone: true,
  imports: [
    SolarCellsComponent,
    CalcBrandComponent,
    CalcModelComponent,
    DisplayComponent,
    CommandKeysComponent,
    NumericKeysComponent,
    OperatorKeysComponent,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
})
export class CalculatorComponent implements OnDestroy {
  brand = 'Casio';
  model = 'fx-85MS';
  result = '';
  initialResult = DEFAULT_RESULT;
  isOn = true;
  keys = {
    command: COMMAND_KEYS,
    numeric: NUMERIC_KEYS,
    operator: OPERATOR_KEYS,
  };

  private calculatorService = inject(CalculatorService);
  private isOnSubscription = this.calculatorService.isOn$.subscribe(
    (toggleOnOffEvent) => {
      this.isOn = toggleOnOffEvent;
    }
  );
  private resultSubscription = this.calculatorService.result$.subscribe(
    (updateResultEvent) => {
      this.result = updateResultEvent;
    }
  );

  ngOnDestroy(): void {
    this.isOnSubscription.unsubscribe();
    this.resultSubscription.unsubscribe();
  }

  onPressCommandKey(key: KeyModel) {
    this.onPressKey(key);
  }

  onPressOperationKey(key: KeyModel) {
    this.onPressKey(key);
  }

  onPressNumericKey(key: KeyModel) {
    this.onPressKey(key);
  }

  private onPressKey(key: KeyModel): void {
    this.calculatorService.onSelectKey(key);
  }
}
