import { currentFragment } from "./dom";

let sid = 0;
let bid = 0;
let batch: Batch;

export interface Batch {
  ___bid: number;
  ___signals: Record<string, Signal>;
  ___computations: Computation[];
  ___effects: Effect[];
  ___values: Record<string, unknown>;
  ___pending: Record<string, Signal>;
  ___computationIndex: number;
}

export type Deps = readonly MaybeSignal[];
export type SignalTypes =
  | typeof SOURCE
  | typeof COMPUTED
  | typeof ASYNC_COMPUTED
  | typeof EFFECT;
export type Signal<T = unknown> = Source<T> | Computation<T>;
export type Computation<V = unknown, T extends Deps = readonly unknown[]> =
  | SyncComputation<V, T>
  | AsyncComputation<V, T>;

export interface BaseSignal<V = unknown, T extends Deps = readonly unknown[]> {
  ___bid: number;
  ___sid: number;
  ___type: SignalTypes;
  ___deps: T;
  ___value: V;
  ___dependents: Record<string, Signal>;
  ___cleanup: () => void;
}
export type Source<V = unknown> = BaseSignal<V, readonly unknown[]> & {
  ___fn: () => void;
};
export type SyncComputation<
  V = unknown,
  T extends Deps = readonly unknown[]
> = BaseSignal<V, T> & {
  ___fn: (...args: RawMap<T>) => V;
};
export type AsyncComputation<
  V = unknown,
  T extends Deps = readonly unknown[]
> = BaseSignal<V, T> & {
  ___fn: (...args: RawMap<T>) => Promise<V>;
};
export type Effect<T extends Deps = readonly unknown[]> = BaseSignal<
  undefined,
  T
> & {
  ___fn: (...args: RawMap<T>) => void;
};

export type MaybeSignal<T = unknown> = T | Signal<T>;
export type Raw<T> = T extends Signal<infer V> ? V : T;
export type RawMap<T> = { [I in keyof T]: Raw<T[I]> };

const SOURCE = 1;
const COMPUTED = 2;
const ASYNC_COMPUTED = 3;
const EFFECT = 4;

const pendingBatches: Record<string, Batch> = {};
const noop = () => {};
const empty = [];

export function createSignal<V extends void | unknown, T extends Deps>(
  value: V,
  type: SignalTypes = SOURCE,
  fn: (...args: RawMap<T>) => V | Promise<V> = noop as any,
  deps: T = empty as any
): Source<V> {
  const signal = {
    ___bid: 0,
    ___sid: sid++,
    ___type: type,
    ___fn: fn,
    ___deps: deps,
    ___value: value,
    ___dependents: {},
    ___cleanup: cleanup
  };

  for (const dep of deps) {
    if (isSignal(dep)) {
      dep.___dependents[signal.___sid] = signal;
    }
  }

  return signal;
}

function setSignalValue(value, nextValue) {
  if (value.___value !== nextValue) {
    if (batch) {
      const id = value.___sid;
      batch.___values[id] = nextValue;
      batch.___signals[id] = value;
    } else {
      value.___value = nextValue;
    }
    queueDependents(value.___dependents);
  }
}

function queueDependents(dependents: Record<string, Signal>) {
  for (const key in dependents) {
    const dependent = dependents[key];
    const isEffect = dependent.___type === EFFECT;
    const batchTarget = isEffect ? batch.___effects : batch.___computations;
    const batchIndex = isEffect ? 0 : batch.___computationIndex;
    insertIntoBatch(batchTarget, batchIndex, dependent);
  }
}

function updateSignal<V, T extends Deps>(computedValue: Computation<V, T>) {
  const fn = computedValue.___fn;
  const deps = computedValue.___deps;
  const args = deps.map(dep => get(dep, true));
  if (!handlePendingDeps(computedValue, deps, args)) {
    setSignalValue(computedValue, fn(...(args as any)));
  }
}

let handlePendingDeps: typeof _handlePendingDeps = noop as any;
function _handlePendingDeps<V>(
  computation: Computation<V>,
  deps: Deps,
  args: unknown[]
) {
  const fn = computation.___fn;
  const async = computation.___type === ASYNC_COMPUTED;
  let hasPendingDeps = false;
  for (const dep of deps) {
    if (batch && isSignal(dep) && batch.___pending[dep.___sid]) {
      hasPendingDeps = true;
      break;
    }
  }
  if (hasPendingDeps || async) {
    let computed: V;
    const storedBatch = batch;
    const id = computation.___sid;
    const values = batch.___values;
    batch.___pending[id] = batch.___signals[id] = computation;
    values[id] = (hasPendingDeps
      ? Promise.all(args).then(resolved => {
          batch = storedBatch;
          computed = fn(...resolved) as V;
          batch = undefined as any;
          return async && computed;
        })
      : (fn(...args) as Promise<V>)
    ).then(result => {
      return (values[id] = async ? result : computed);
    });
    return true;
  }
}

export function createComputation<V, T extends Deps>(
  fn: (...args: RawMap<T>) => Promise<V> | V,
  deps: T,
  type: typeof COMPUTED | typeof ASYNC_COMPUTED = COMPUTED
) {
  for (const dep of deps) {
    if (isSignal(dep) || type === ASYNC_COMPUTED) {
      // We have signal dependencies so we need a computation
      const computation = createSignal<V, T>(
        undefined!,
        type,
        fn,
        deps
      ) as SyncComputation<V, T>;
      updateSignal(computation);
      if (currentFragment) {
        currentFragment.___tracked.add(computation);
      }
      return computation;
    }
  }

  // All dependencies were static, just compute and return the raw value
  return fn(...(deps as any)) as V;
}

export let createAsyncComputation = originalCreateAsyncComputedValue;
function originalCreateAsyncComputedValue<V, T extends Deps>(
  fn: (...args: RawMap<T>) => Promise<V>,
  deps: T
) {
  handlePendingDeps = _handlePendingDeps;
  handlePendingSignals = _handlePendingSignals;
  handlePendingBatches = _handlePendingBatches;
  return (createComputation<V, T>(
    fn,
    deps,
    ASYNC_COMPUTED
  ) as any) as AsyncComputation<V, T>;
}

export function createEffect<T extends Deps>(
  fn: (...args: RawMap<T>) => void,
  deps: T,
  id?: number
) {
  const effect = createSignal<void, T>(undefined, EFFECT, fn, deps) as Effect<
    T
  >;
  if (id) {
    effect.___sid = id;
  }
  if (currentFragment) {
    currentFragment.___tracked.add(effect);
  }
  insertIntoBatch(batch.___effects, 0, effect);
}

export function isSignal<T>(maybe: MaybeSignal<T>): maybe is Signal<T> {
  return maybe && (maybe as Signal).___type > 0;
}

function cleanup() {
  const signal = this as Signal;
  for (const dep of signal.___deps) {
    if (isSignal(dep)) {
      delete dep.___dependents[signal.___sid];
    }
  }
  // signal.___update = noop as () => T;
}

export function dynamicKeys<T extends MaybeSignal<Record<string, unknown>>>(
  object: T,
  watchedKeys: string[]
) {
  if (isSignal(object)) {
    watchedKeys.forEach(
      key =>
        (object[key] = createComputation(
          (_object, _key) => get(_object[_key]),
          [object, key] as const
        ))
    );
  }
  return object;
}

export function get<T>(value: MaybeSignal<T>, allowPending?: true): T {
  if (isSignal(value)) {
    let id: number;
    if (
      batch &&
      batch.___values.hasOwnProperty((id = value.___sid)) &&
      (allowPending || !batch.___pending[id])
    ) {
      value = batch.___values[id] as T;
    } else {
      value = value.___value!;
    }
  }
  return value;
}

export function set(value: MaybeSignal, newValue: unknown) {
  if (isSignal(value)) {
    setSignalValue(value, newValue);
  }
  return newValue;
}

export function beginBatch() {
  return (batch = {
    ___bid: ++bid,
    ___signals: {},
    ___computations: [],
    ___effects: [],
    ___values: {},
    ___pending: {},
    ___computationIndex: 0
  });
}

export function endBatch(b: Batch) {
  if (b === batch) {
    while (batch.___computationIndex < batch.___computations.length) {
      updateSignal(batch.___computations[batch.___computationIndex++]);
    }
    if (!handlePendingSignals()) {
      for (const _effect of batch.___effects) {
        if (_effect.___bid <= batch.___bid) {
          _effect.___bid = batch.___bid;
          updateSignal(_effect);
        }
      }
      for (const id in batch.___signals) {
        const signal = batch.___signals[id];
        if (signal.___bid <= batch.___bid) {
          signal.___bid = batch.___bid;
          signal.___value = batch.___values[id];
        }
      }
      handlePendingBatches();
    }
    batch = undefined as any;
  }
}

let handlePendingSignals: typeof _handlePendingSignals = noop as any;
function _handlePendingSignals() {
  const pendingIds = Object.keys(batch.___pending);
  if (pendingIds.length) {
    const all: Array<Promise<unknown>> = [];
    const storedBatch = batch;
    for (const id of pendingIds) {
      all.push(batch.___values[id] as Promise<unknown>);
    }
    pendingBatches[batch.___bid] = batch;
    Promise.all(all).then(() => {
      batch = storedBatch;
      delete pendingBatches[batch.___bid];
      for (const id of pendingIds) {
        const signal = batch.___pending[id];
        const value = batch.___values[id];
        delete batch.___pending[id];
        setSignalValue(signal, value);
      }
      endBatch(batch);
    });
    return true;
  }
}

let handlePendingBatches: typeof _handlePendingBatches = noop as any;
function _handlePendingBatches() {
  for (const batchId in pendingBatches) {
    const pendingBatch = pendingBatches[batchId];
    for (const signalId in batch.___signals) {
      let signal: Signal;
      if ((signal = pendingBatch.___signals[signalId])) {
        if (signal.___type === SOURCE) {
          if (+batchId <= batch.___bid) {
            unqueue(signal, pendingBatch);
          }
        } else {
          for (const dep of signal.___deps) {
            const id = dep && (dep as Signal).___sid;
            if (batch.___signals[id] && !pendingBatch.___signals[id]) {
              insertIntoBatch(
                pendingBatch.___computations,
                pendingBatch.___computationIndex,
                signal
              );
              break;
            }
          }
        }
      }
    }
  }
}

function unqueue(signal: Signal, pendingBatch: Batch) {
  const id = signal.___sid;
  delete pendingBatch.___values[id];
  delete pendingBatch.___signals[id];
  delete pendingBatch.___pending[id];

  if (signal.___type !== SOURCE) {
    const index = pendingBatch.___computations.findIndex(c => c === signal);
    if (index >= pendingBatch.___computationIndex) {
      pendingBatch.___computations.splice(index, 1);
    }
  }

  outer: for (const id1 in signal.___dependents) {
    const child = signal.___dependents[id1];
    for (const dep of child.___deps) {
      const id2 = dep && (dep as Signal).___sid;
      if (pendingBatch.___signals[id2]) {
        insertIntoBatch(
          pendingBatch.___computations,
          pendingBatch.___computationIndex,
          signal
        );
        continue outer;
      }
    }
    unqueue(child, pendingBatch);
  }
}

function insertIntoBatch(
  array: Array<Signal | Effect>,
  index: number,
  object: Signal | Effect
) {
  let max = array.length;

  while (index < max) {
    const mid = (index + max) >>> 1;
    if (array[mid].___sid < object.___sid) {
      index = mid + 1;
    } else {
      max = mid;
    }
  }

  if (array[index] !== object) {
    array.splice(index, 0, object);
  }
}
