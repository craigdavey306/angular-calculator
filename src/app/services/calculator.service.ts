import { Injectable } from '@angular/core';
import { evaluate } from 'mathjs';
import { StackService } from './stack.service';
import { MathOperator } from '../types';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { KeyModel } from '../models';

const ZERO = '0';

/**
 * Calculator Service class used to track the calculator on/off state, the result of a calculation, or the
 * numbers entered by the user.
 *
 */
@Injectable({ providedIn: 'root' })
export class CalculatorService {
  result$ = new BehaviorSubject<string>('');
  isOn$ = new BehaviorSubject<boolean>(true);

  // Private variables below.
  private numberStack: StackService<string> = new StackService();
  private operatorStack: StackService<MathOperator> = new StackService();
  private currentNumber: string = '';
  private lastKeyPressed?: KeyModel;

  /**
   * Called whenever a user presses one of the calculator keys
   * to handle command, operation, and numeric keys.
   *
   * @param key {KeyModel} Key pressed by the user
   * @returns
   */
  onSelectKey(key: KeyModel): void {
    switch (key.type) {
      case 'cmd':
        this.onSelectCommandKey(key);
        break;
      case 'op':
        this.onSelectOperatorKey(key);
        break;
      default:
        this.onSelectNumericKey(key);
        break;
    }

    this.updateLastKeyPressed(key);
  }

  /**
   * Updates the last key pressed variable with key current key
   * selected by the user.
   * @param key {KeyModel} Key pressed by the user.
   */
  private updateLastKeyPressed(key: KeyModel): void {
    this.lastKeyPressed = key;
  }

  /**
   * Processes the pressed command key.
   * @param key {KeyModel} Command key selected by the user
   * @returns
   */
  private onSelectCommandKey(key: KeyModel): void {
    if (key.type !== 'cmd') return;

    // Handle memory clear.
    if (key.internal === 'ac') {
      this.clear();
      return;
    }

    // Handle deleting the last digit.
    if (key.internal === 'del') {
      this.deleteLastDigit();
      return;
    }

    // Toggle on/off.
    if (key.internal === 'on-off') {
      this.toggleOnOff();
      return;
    }
  }

  /**
   * Process the pressed operation key.
   * @param key {KeyModel} Operation key selected by the user.
   * @returns
   */
  private onSelectOperatorKey(key: KeyModel): void {
    if (key.type !== 'op') return;

    // Calculate percentage of the current number.
    if (key.internal === '%') {
      this.calculatePercentage(this.currentNumber || this.result$.getValue());
      return;
    }

    // Calculate the result when the equals ('=') key is pressed.
    if (key.internal === '=') {
      this.calculateResult(this.currentNumber);
      return;
    }

    // Handle remaining operations.
    if (
      key.internal === '*' ||
      key.internal === '+' ||
      key.internal === '-' ||
      key.internal === '/'
    ) {
      this.numberStack.push(this.currentNumber);
      this.operatorStack.push(key.internal);
    }
  }

  /**
   * Process the pressed numeric key.
   * @param key {KeyModel} Numeric key selected by the user.
   * @returns
   */
  private onSelectNumericKey(key: KeyModel): void {
    if (key.type !== 'num') return;

    const lastKeyPressed = this.lastKeyPressed;

    // Set up a new number if the last key pressed as an operation.
    if (lastKeyPressed?.type === 'op') {
      this.handleNewNumber(key);
      return;
    }

    // Do nothing if the current number already has a decimal and the user selects it again.
    if (key.internal === '.' && this.currentNumber.includes('.')) return;

    // Update the current number and result.
    this.currentNumber += key.internal;
    this.result$.next(this.currentNumber);
  }

  /**
   * A new current number string should be created after a user performs an operation.
   * @param key {KeyModel} Numeric key pressed by the user.
   */
  private handleNewNumber(key: KeyModel) {
    this.currentNumber = key.internal;
    this.result$.next(this.currentNumber);
  }

  /**
   * Clears the calculator memory.
   *
   * Number and operator stacks are reset, the current number is set to an empty string, and the
   * result is cleared out.
   */
  private clear(): void {
    this.numberStack.reset();
    this.operatorStack.reset();
    this.currentNumber = '';
    this.result$.next('');
  }

  /**
   * Removes the last digit from the
   * @returns
   */
  private deleteLastDigit(): void {
    if (!this.currentNumber || this.lastKeyPressed?.type !== 'num') return;
    this.currentNumber = this.currentNumber.substring(
      0,
      this.currentNumber.length - 1
    );
    this.result$.next(this.currentNumber);
  }

  /**
   * Toggles the on/off state.
   */
  private toggleOnOff(): void {
    const onStatus = this.isOn$.getValue();
    this.isOn$.next(!onStatus);
    this.clear();
  }

  /**
   * Calculates the percentage of the numeric value.
   * @param numericString {string} Numeric string whose percentage will be calculated.
   */
  private calculatePercentage(numericString: string): void {
    this.numberStack.push(numericString || ZERO);
    this.numberStack.push('100');
    this.operatorStack.push('/');
    this.calculate();
  }

  /**
   * Calculates a result whenever the equals ('=') key is pressed.
   * @param numericString {string} Numeric string that will be used in the calculation.
   */
  private calculateResult(numericString: string): void {
    this.numberStack.push(numericString || ZERO);
    const result = this.calculate();
    this.numberStack.push(result);
    this.currentNumber = '';
  }

  /**
   * Calculates and evaluates an expression.
   * @returns {any} Returns the result of the evaluation.
   */
  private calculate(): any {
    const y = this.numberStack.pop() ?? ZERO;
    const x = this.numberStack.pop() ?? ZERO;
    const op = this.operatorStack.pop();

    const expression = `${x} ${op} ${y}`;
    const result = evaluate(expression);

    this.result$.next(result);

    this.numberStack.push(result);
    this.currentNumber = result;

    return result;
  }
}
