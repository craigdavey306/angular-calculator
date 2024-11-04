import { KeyModel } from './models';

export const DEFAULT_RESULT = '0';

export const COMMAND_KEYS: ReadonlyArray<KeyModel> = [
  { type: 'cmd', external: 'off', internal: 'on-off' },
  { type: 'op', external: '%', internal: '%' },
  { type: 'cmd', external: 'DEL', internal: 'del' },
];

export const OPERATOR_KEYS: ReadonlyArray<KeyModel> = [
  { type: 'cmd', external: 'AC', internal: 'ac' },
  { type: 'op', external: '+', internal: '+' },
  { type: 'op', external: '-', internal: '-' },
  { type: 'op', external: '*', internal: '*' },
  { type: 'op', external: '/', internal: '/' },
];

export const NUMERIC_KEYS: ReadonlyArray<ReadonlyArray<KeyModel>> = [
  [
    { type: 'num', external: '7', internal: '7' },
    { type: 'num', external: '8', internal: '8' },
    { type: 'num', external: '9', internal: '9' },
  ],
  [
    { type: 'num', external: '4', internal: '4' },
    { type: 'num', external: '5', internal: '5' },
    { type: 'num', external: '6', internal: '6' },
  ],
  [
    { type: 'num', external: '1', internal: '1' },
    { type: 'num', external: '2', internal: '2' },
    { type: 'num', external: '3', internal: '3' },
  ],
  [
    { type: 'num', external: '0', internal: '0' },
    { type: 'num', external: '.', internal: '.' },
    { type: 'op', external: '=', internal: '=' },
  ],
];
