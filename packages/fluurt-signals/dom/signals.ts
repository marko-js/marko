import { currentFragment } from "./dom";

let sid = 0;
let batchedComputations: ComputedSignal[] | undefined;
let batchedEffects: Effect[] | undefined;
let computationIndex = 0;
let effectIndex = 0;

const noop = () => {};

export type MaybeSignal<T = unknown> = Signal<T> | T;
export type Raw<T> = T extends Signal<infer V> ? V : T;
export type RawMap<T> = { [I in keyof T]: Raw<T[I]> };

export class Signal<T = unknown> {
  public ___sid: number = sid++;
  public ___value: T;
  private ___dependents: Record<string, ComputedSignal> = {};
  constructor(current: T) {
    this.___value = current;
  }
  public ___set(nextValue: T) {
    if (
      nextValue !== this.___value ||
      (nextValue instanceof Object && !(nextValue instanceof Function))
    ) {
      this.___value = nextValue;
      const dependents = this.___dependents;
      const keys = Object.keys(dependents);

      for (const key of keys) {
        const dependent = dependents[key];
        const isEffect = dependent instanceof Effect;
        const batchTarget = isEffect ? batchedEffects : batchedComputations;
        const batchIndex = isEffect ? effectIndex : computationIndex;
        insertIntoBatch(batchTarget!, batchIndex, dependent);
      }
    }
  }
  public ___subscribe(computation: ComputedSignal) {
    this.___dependents[computation.___sid] = computation;
  }
  public ___unsubscribe(computation: ComputedSignal) {
    delete this.___dependents[computation.___sid]; // todo: bench using undefined
  }
}

export class ComputedSignal<T = unknown> extends Signal<T> {
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
    const nextValue = fn(...this.___deps.map(get));
    this.___set(nextValue);
    return nextValue;
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

class Effect extends ComputedSignal<void> {
  public ___set = noop;
}

export function compute<T extends ReadonlyArray<unknown>, V>(
  fn: (...args: RawMap<T>) => V,
  deps: T,
  SignalConstructor = ComputedSignal
) {
  const id = sid++;
  let value: V;

  if (SignalConstructor !== Effect) {
    let isStatic = true;
    for (const dep of deps) {
      if (dep instanceof Signal) {
        isStatic = false;
        break;
      }
    }

    if (isStatic) {
      return fn(...(deps as any));
    } else {
      value = fn(...(deps.map(get) as any));
    }
  }

  const signal = new SignalConstructor(fn, value!, deps);
  signal.___sid = id;
  if (currentFragment) {
    currentFragment.___tracked.add(signal);
  }
  return signal;
}

export function effect<T extends ReadonlyArray<unknown>>(
  fn: (...args: RawMap<T>) => void,
  deps: T,
  id?: number
) {
  const effectInstance = compute(
    fn,
    deps,
    Effect as typeof ComputedSignal
  ) as Effect;
  if (id) {
    effectInstance.___sid = id;
  }
  insertIntoBatch(batchedEffects!, effectIndex, effectInstance);
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
    value = value.___value;
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
  if (!batchedComputations) {
    batchedEffects = [];
    return (batchedComputations = []);
  }
}

export function endBatch(b: typeof batchedComputations) {
  if (b === batchedComputations) {
    for (
      computationIndex = 0;
      computationIndex < batchedComputations!.length;
      computationIndex++
    ) {
      batchedComputations![computationIndex].___update();
    }
    for (effectIndex = 0; effectIndex < batchedEffects!.length; effectIndex++) {
      batchedEffects![effectIndex].___update();
    }
    batchedComputations = batchedEffects = undefined;
    computationIndex = effectIndex = 0;
  }
}

function insertIntoBatch(
  array: ComputedSignal[],
  index: number,
  object: ComputedSignal
) {
  let max = array!.length;

  while (index < max) {
    const mid = (index + max) >>> 1;
    if (array![mid].___sid < object.___sid) {
      index = mid + 1;
    } else {
      max = mid;
    }
  }

  if (array![index] !== object) {
    array!.splice(index, 0, object);
  }
}
