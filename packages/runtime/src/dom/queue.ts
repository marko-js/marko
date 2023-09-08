import type { Scope } from "../common/types";
import type { ValueSignal } from "./signals";
import { schedule } from "./schedule";

const enum BatchOffsets {
  SCOPE = 0,
  SIGNAL = 1,
  VALUE = 2,
  TOTAL = 3,
}

const enum EffectOffsets {
  SCOPE = 0,
  FN = 1,
  TOTAL = 2,
}

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;

let currentBatch: unknown[] = [];
let currentEffects: unknown[] = [];

export function queueSource<T>(scope: Scope, signal: ValueSignal, value: T) {
  schedule();
  signal(scope, 0, 1);
  currentBatch.push(scope, signal, value);
  return value;
}

export function queueEffect<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T
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
  for (let i = 0; i < effects.length; i += EffectOffsets.TOTAL) {
    const scope = effects[i] as Scope;
    const fn = effects[i + 1] as (scope: Scope) => void;
    fn(scope);
  }
}

function runBatch() {
  for (let i = 0; i < currentBatch.length; i += BatchOffsets.TOTAL) {
    const scope = currentBatch[i + BatchOffsets.SCOPE] as Scope;
    const signal = currentBatch[i + BatchOffsets.SIGNAL] as ValueSignal;
    const value = currentBatch[i + BatchOffsets.VALUE] as unknown;
    signal(scope, value);
  }
}
