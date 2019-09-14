import { currentFragment } from "./fragments";

let depTracker: Set<Signal<unknown>> | undefined;
let sid = 0;

export type MaybeSignal<T> = Signal<T> | T;
export type Raw<T> = T extends Signal<infer V> ? V : T;

export class Signal<T> {
  public sid: number = sid++;
  public ___value: T;
  private ___listeners: Set<ComputedSignal<unknown>> = new Set();
  constructor(current: T) {
    this.___value = current;
  }
  public ___set(nextValue: T) {
    if (nextValue !== this.___value || nextValue instanceof Object) {
      this.___value = nextValue;
      for (const l of this.___listeners) {
        l.___compute();
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
  public static create<T>(fn: () => T) {
    const signal = new ComputedSignal(fn);

    if (!signal.prevDeps.size) {
      if (currentFragment) {
        currentFragment.tracked.add(signal);
      }
      return signal.___value;
    } else {
      return signal;
    }
  }

  private fn: () => T;
  private prevDeps: Set<Signal<unknown>>;
  constructor(fn: () => T) {
    super((undefined as any) as T);
    this.fn = fn;
    this.___compute();
  }
  public ___compute() {
    const fn = this.fn;
    const prevDeps = this.prevDeps;
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
    this.prevDeps = nextDeps;
    return nextValue;
  }
  public ___cleanup() {
    for (const d of this.prevDeps) {
      d.___off(this);
    }
  }
}

export const compute = ComputedSignal.create;

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
