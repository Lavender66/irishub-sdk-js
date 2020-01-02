import { Coin, MsgValue } from './types';

/** @TODO document */
export interface MsgSend extends MsgValue {
  inputs: Input[];
  outputs: Output[];
}

/** @TODO document */
export interface InputOutput {
  /** Bech32 account address */
  address: string;
  coins: Coin[];
}

/** @TODO document */
export interface Input extends InputOutput {}

/** @TODO document */
export interface Output extends InputOutput {}