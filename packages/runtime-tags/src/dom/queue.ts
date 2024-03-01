import type { Scope } from "../common/types";
import { schedule } from "./schedule";
import { MARK, type ValueSignal } from "./signals";

const enum BatchOffset {
  Scope = 0,
  Signal = 1,
  Value = 2,
  Total = 3,
}

const enum EffectOffset {
  Scope = 0,
  Function = 1,
  Total = 2,
}

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;

let currentBatch: unknown[] = [];
let currentEffects: unknown[] = [];

export function queueControllableSource<T>(
  scope: Scope,
  signal: ValueSignal,
  changeHandler: ((newValue: T) => void) | undefined,
  value: T,
) {
  if (changeHandler) {
    changeHandler(value);
    return value;
  }
  return queueSource(scope, signal, value);
}

export function queueSource<T>(scope: Scope, signal: ValueSignal, value: T) {
  schedule();
  signal(scope, MARK);
  currentBatch.push(scope, signal, value);
  return value;
}

export function queueEffect<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
) {
  currentEffects.push(scope, fn);
}

export function run() {
  try {
    runBatch();
  } finally {
    currentBatch = [];
  }
  try {
    runEffects();
  } finally {
    currentEffects = [];
  }
}

export function runSync(fn: () => void) {
  const prevBatch = currentBatch;
  const prevEffects = currentEffects;
  currentBatch = [];
  currentEffects = [];
  try {
    fn();
    runBatch();
    currentBatch = prevBatch;
    runEffects();
  } finally {
    currentBatch = prevBatch;
    currentEffects = prevEffects;
  }
}

export function prepare(fn: () => void) {
  const prevBatch = currentBatch;
  const prevEffects = currentEffects;
  const preparedEffects = (currentEffects = []);
  currentBatch = [];
  try {
    fn();
    runBatch();
  } finally {
    currentBatch = prevBatch;
    currentEffects = prevEffects;
  }
  return preparedEffects;
}

export function runEffects(effects: unknown[] = currentEffects) {
  for (let i = 0; i < effects.length; i += EffectOffset.Total) {
    const scope = effects[i] as Scope;
    const fn = effects[i + 1] as (scope: Scope) => void;
    fn(scope);
  }
}

function runBatch() {
  for (let i = 0; i < currentBatch.length; i += BatchOffset.Total) {
    const scope = currentBatch[i + BatchOffset.Scope] as Scope;
    const signal = currentBatch[i + BatchOffset.Signal] as ValueSignal;
    const value = currentBatch[i + BatchOffset.Value] as unknown;
    signal(scope, value);
  }
}
