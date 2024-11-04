import { ButtonType, Command, MathOperator, NumericKey } from '../types';

export interface KeyModel {
  type: ButtonType;
  internal: NumericKey | MathOperator | Command;
  external: string;
}
