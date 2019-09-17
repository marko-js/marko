import { currentFragment } from "./dom";

let depTracker: Set<Signal<unknown>> | undefined;
let sid = 0;
let batchedComputations: Array<ComputedSignal<unknown>> | undefined;
let batchIndex: number;

const noop = () => {};

export type MaybeSignal<T> = Signal<T> | T;
export type Raw<T> = T extends Signal<infer V> ? V : T;

export class Signal<T> {
  public ___sid: number = sid++;
  public ___value: T;
  private ___listeners: Set<ComputedSignal<unknown>> = new Set();
  constructor(current: T) {
    this.___value = current;
  }
  public ___set(nextValue: T) {
    if (nextValue !== this.___value || nextValue instanceof Object) {
      this.___value = nextValue;
      for (const l of this.___listeners) {
        const index = getIndex(batchedComputations, l.___sid);
        if (batchedComputations![index] !== l) {
          batchedComputations!.splice(index, 0, l);
        }
      }
    }
  }
  public ___on(listener: ComputedSignal<unknown>) {
    this.___listeners.add(listener);
  }
  public ___off(listener: ComputedSignal<unknown>) {
    this.___listeners.delete(listener);
  }
}

export class ComputedSignal<T> extends Signal<T> {
  public static ___create<T>(fn: () => T) {
    const signal = new ComputedSignal(fn);

    if (signal.___prevDeps.size) {
      if (currentFragment) {
        currentFragment.___tracked.add(signal);
      }
      return signal;
    } else {
      return signal.___value;
    }
  }

  private ___fn: () => T;
  private ___prevDeps: Set<Signal<unknown>>;
  constructor(fn: () => T) {
    super((undefined as any) as T);
    this.___fn = fn;
    this.___compute();
  }
  public ___compute() {
    const fn = this.___fn;
    const prevDeps = this.___prevDeps;
    const parentTracker = depTracker;
    const nextDeps = (depTracker = new Set());
    const nextValue = fn();
    depTracker = parentTracker;
    for (const d of nextDeps) {
      d.___on(this);
    }
    if (prevDeps) {
      for (const d of prevDeps) {
        if (!nextDeps.has(d)) {
          d.___off(this);
        }
      }
      this.___set(nextValue);
    } else {
      this.___value = nextValue;
    }
    this.___prevDeps = nextDeps;
    return nextValue;
  }
  public ___cleanup() {
    for (const d of this.___prevDeps) {
      d.___off(this);
    }
    this.___compute = noop as () => T;
  }
}

export const compute = ComputedSignal.___create;

export function dynamicKeys(
  object: MaybeSignal<{ [x: string]: unknown }>,
  watchedKeys: string[]
) {
  if (object instanceof Signal) {
    watchedKeys.forEach(
      key => (object[key] = compute(() => get(get(object)[key])))
    );
  }
  return object;
}

export function get<T>(value: MaybeSignal<T>): T {
  if (value instanceof Signal) {
    if (depTracker) {
      depTracker.add(value);
    }
    value = value.___value;
  }
  return value;
}

export function set(value: MaybeSignal<unknown>, newValue: unknown) {
  if (value instanceof Signal) {
    value.___set(newValue);
  }
  return newValue;
}

export function beginBatch() {
  if (!batchedComputations) {
    return (batchedComputations = []);
  }
}

export function endBatch(b: typeof batchedComputations) {
  if (b === batchedComputations) {
    for (
      batchIndex = 0;
      batchIndex < batchedComputations!.length;
      batchIndex++
    ) {
      batchedComputations![batchIndex].___compute();
    }
    batchedComputations = undefined;
    batchIndex = 0;
  }
}

function getIndex(array: typeof batchedComputations, value: number) {
  let low = batchIndex;
  let high = array!.length;

  while (low < high) {
    const mid = (low + high) >>> 1;
    if (array![mid].___sid < value) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
