import type { Scope } from "../common/types";
import { schedule } from "./schedule";
import { MARK, type ValueSignal } from "./signals";

const enum PendingSignalOffset {
  Scope = 0,
  Signal = 1,
  Value = 2,
  Total = 3,
}

const enum PendingEffectOffset {
  Scope = 0,
  Function = 1,
  Total = 2,
}

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;

let pendingSignals: unknown[] = [];
let pendingEffects: unknown[] = [];
export let rendering = false;

export function queueSource<T>(scope: Scope, signal: ValueSignal, value: T) {
  schedule();
  rendering = true;
  signal(scope, MARK);
  rendering = false;
  pendingSignals.push(scope, signal, value);
  return value;
}

export function queueEffect<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
) {
  pendingEffects.push(scope, fn);
}

export function run() {
  const signals = pendingSignals;
  const effects = pendingEffects;
  try {
    rendering = true;
    pendingSignals = [];
    runSignals(signals);
  } finally {
    rendering = false;
  }
  pendingEffects = [];
  runEffects(effects);
}

export function prepareEffects(fn: () => void): unknown[] {
  const prevSignals = pendingSignals;
  const prevEffects = pendingEffects;
  const preparedEffects = (pendingEffects = []);
  const preparedSignals = (pendingSignals = []);
  try {
    rendering = true;
    fn();
    pendingSignals = prevSignals;
    runSignals(preparedSignals);
  } finally {
    rendering = false;
    pendingSignals = prevSignals;
    pendingEffects = prevEffects;
  }
  return preparedEffects;
}

export function runEffects(effects: unknown[] = pendingEffects) {
  for (let i = 0; i < effects.length; i += PendingEffectOffset.Total) {
    const scope = effects[i] as Scope;
    const fn = effects[i + 1] as (a: Scope, b: Scope) => void;
    fn(scope, scope);
  }
}

function runSignals(signals: unknown[]) {
  for (let i = 0; i < signals.length; i += PendingSignalOffset.Total) {
    const scope = signals[i + PendingSignalOffset.Scope] as Scope;
    const signal = signals[i + PendingSignalOffset.Signal] as ValueSignal;
    const value = signals[i + PendingSignalOffset.Value] as unknown;
    signal(scope, value);
  }
}
