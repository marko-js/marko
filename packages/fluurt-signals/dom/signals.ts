import { currentFragment } from "./dom";

let sid = 0;
let bid = 0;
let batchId: number;
let batchedSignals: Record<string, Signal>;
let batchedValues: Record<string, unknown>;
let batchedPending: Record<string, Computed>;
let batchedComputations: Computed[];
let batchedEffects: Effect[];
let computationIndex: number;

const noop = () => {};

export type MaybeSignal<T = unknown> = Signal<T> | T;
export type Raw<T> = T extends Signal<infer V> ? V : T;
export type RawMap<T> = { [I in keyof T]: Raw<T[I]> };

export class Signal<T = unknown> {
  public ___bid: number = 0;
  public ___sid: number = sid++;
  public ___value: T;
  private ___dependents: Record<string, Computed> = {};
  constructor(current: T) {
    this.___value = current;
  }
  public ___set(nextValue: T) {
    if (
      nextValue !== this.___value ||
      (nextValue instanceof Object && !(nextValue instanceof Function))
    ) {
      if (batchedValues) {
        const id = this.___sid;
        batchedValues[id] = nextValue;
        batchedSignals[id] = this;
      } else {
        this.___value = nextValue;
      }
      const dependents = this.___dependents;
      const keys = Object.keys(dependents);

      for (const key of keys) {
        const dependent = dependents[key];
        const isEffect = dependent instanceof Effect;
        const batchTarget = isEffect ? batchedEffects : batchedComputations;
        const batchIndex = isEffect ? 0 : computationIndex;
        insertIntoBatch(batchTarget, batchIndex, dependent);
      }
    }
  }
  public ___subscribe(computation: Computed) {
    this.___dependents[computation.___sid] = computation;
  }
  public ___unsubscribe(computation: Computed) {
    delete this.___dependents[computation.___sid]; // todo: bench using undefined
  }
}

export class Computed<T = unknown> extends Signal<T> {
  public ___async = false;
  private ___fn: (...args: ReadonlyArray<unknown>) => T;
  private ___deps: ReadonlyArray<MaybeSignal>;
  constructor(fn: () => T, intialValue: T, deps: ReadonlyArray<MaybeSignal>) {
    super(intialValue);
    this.___fn = fn;
    for (const dep of deps) {
      if (dep instanceof Signal) {
        dep.___subscribe(this);
      }
    }
    this.___deps = deps;
  }
  public ___update() {
    const fn = this.___fn;
    const deps = this.___deps;
    const args: any = [];
    let hasPendingDeps = false;
    for (let dep of deps) {
      if (dep instanceof Signal) {
        const id = dep.___sid;
        if (batchedValues && batchedValues.hasOwnProperty(id)) {
          dep = batchedValues[id] as T;
          if (batchedPending[id]) {
            hasPendingDeps = true;
          }
        } else {
          dep = dep.___value;
        }
      }
      args.push(dep);
    }
    const async = this.___async;
    if (hasPendingDeps || async) {
      let computed: T;
      const id = this.___sid;
      const pending = batchedPending;
      const values = batchedValues;
      pending[id] = this;
      values[id] = (hasPendingDeps
        ? Promise.all(args).then(resolved => {
            computed = fn(...resolved);
            return async && computed;
          })
        : ((fn(...args) as unknown) as Promise<T>)
      ).then(result => {
        values[id] = async ? result : computed;
      });
    } else {
      this.___set(fn(...args));
    }
  }
  public ___cleanup() {
    for (const dep of this.___deps) {
      if (dep instanceof Signal) {
        dep.___unsubscribe(this);
      }
    }
    this.___update = noop as () => T;
  }
}

class AsyncComputed<T = unknown> extends Computed<T> {
  public ___async = true;
}

class Effect extends Computed<void> {
  public ___set = noop;
}

export function compute<T extends ReadonlyArray<unknown>, V>(
  fn: (...args: RawMap<T>) => V,
  deps: T,
  SignalConstructor = Computed
) {
  const isEffect = SignalConstructor === Effect;

  if (!isEffect) {
    let isStatic = true;
    for (const dep of deps) {
      if (dep instanceof Signal) {
        isStatic = false;
        break;
      }
    }

    if (isStatic) {
      return fn(...(deps as any));
    }
  }

  const signal = new SignalConstructor(fn, undefined, deps);
  if (!isEffect) {
    signal.___update();
  }
  if (currentFragment) {
    currentFragment.___tracked.add(signal);
  }
  return signal;
}

export let computeAsync = originalComputeAsync;
function originalComputeAsync<T extends ReadonlyArray<unknown>, V>(
  fn: (...args: RawMap<T>) => Promise<V>,
  deps: T
) {
  return compute<T, V>(fn as any, deps, AsyncComputed);
}

export function effect<T extends ReadonlyArray<unknown>>(
  fn: (...args: RawMap<T>) => void,
  deps: T,
  id?: number
) {
  const effectInstance = compute(fn, deps, Effect as typeof Computed) as Effect;
  if (id) {
    effectInstance.___sid = id;
  }
  insertIntoBatch(batchedEffects, 0, effectInstance);
}

export function dynamicKeys<T extends MaybeSignal<Record<string, unknown>>>(
  object: T,
  watchedKeys: string[]
) {
  if (object instanceof Signal) {
    watchedKeys.forEach(
      key =>
        (object[key] = compute((_object, _key) => get(_object[_key]), [
          object,
          key
        ] as const))
    );
  }
  return object;
}

export function get<T>(value: MaybeSignal<T>): T {
  if (value instanceof Signal) {
    let id: number;
    if (
      batchedValues &&
      batchedValues.hasOwnProperty((id = value.___sid)) &&
      !batchedPending[id]
    ) {
      value = batchedValues[id] as T;
    } else {
      value = value.___value;
    }
  }
  return value;
}

export function set(value: MaybeSignal, newValue: unknown) {
  if (value instanceof Signal) {
    value.___set(newValue);
  }
  return newValue;
}

export function beginBatch() {
  batchedSignals = {};
  batchedValues = {};
  batchedPending = {};
  batchedEffects = [];
  computationIndex = 0;
  batchId = ++bid;
  return (batchedComputations = [] as Computed[]);
}

export function endBatch(b: typeof batchedComputations) {
  if (b === batchedComputations) {
    while (computationIndex < batchedComputations.length) {
      batchedComputations[computationIndex++].___update();
    }
    const pendingIds = Object.keys(batchedPending);
    if (pendingIds.length) {
      const all: Array<Promise<unknown>> = [];
      const computations = batchedComputations;
      const effects = batchedEffects;
      const pending = batchedPending;
      const values = batchedValues;
      const signals = batchedSignals;
      const index = computationIndex;
      const ID = batchId;
      for (const id of pendingIds) {
        const promise = batchedValues[id] as Promise<unknown>;
        all.push(promise);
      }
      Promise.all(all).then(() => {
        batchedComputations = computations;
        batchedEffects = effects;
        batchedPending = pending;
        batchedValues = values;
        batchedSignals = signals;
        computationIndex = index;
        batchId = ID;
        for (const id of pendingIds) {
          const signal = batchedPending[id];
          const value = batchedValues[id];
          delete batchedPending[id];
          signal.___set(value);
        }
        endBatch(batchedComputations);
      });
    } else {
      const signalIds = Object.keys(batchedSignals);
      for (const id of signalIds) {
        const signal = batchedSignals[id];
        if (signal.___bid <= batchId) {
          signal.___bid = batchId;
          signal.___value = batchedValues[id];
        }
      }
      for (const _effect of batchedEffects) {
        if (_effect.___bid <= batchId) {
          _effect.___bid = batchId;
          _effect.___update();
        }
      }
    }
    batchId = computationIndex = batchedComputations = batchedEffects = batchedPending = batchedValues = batchedSignals = undefined as any;
  }
}

function insertIntoBatch(array: Computed[], index: number, object: Computed) {
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
