import { currentFragment } from "./fragments";

const IS_SIGNAL = Symbol("signal");
const GET = Symbol("get");
const SET = Symbol("set");
const ON = Symbol("on");
const OFF = Symbol("off");
const LISTENERS = Symbol("listeners");

let depTracker: Set<Signal<unknown>> | undefined;
let sid = 0;

export type MaybeSignal<T> = Signal<T> | T;
export type Raw<T> = T extends Signal<infer V> ? V : T;

export class Signal<T> {
  public sid: number = sid++;
  public [GET]: T;
  public [IS_SIGNAL] = true;
  private [LISTENERS]: Set<ComputedSignal<unknown>> = new Set();
  constructor(current: T) {
    this[GET] = current;
  }
  public [SET](next: T) {
    this[GET] = next;
    for (const l of this[LISTENERS]) {
      l.compute();
    }
  }
  public [ON](listener: ComputedSignal<unknown>) {
    this[LISTENERS].add(listener);
  }
  public [OFF](listener: ComputedSignal<unknown>) {
    this[LISTENERS].delete(listener);
  }
}

export class ComputedSignal<T> extends Signal<T> {
  public static create<T>(fn: () => T) {
    const signal = new ComputedSignal(fn);

    if (!signal.prevDeps.size) {
      if (currentFragment) {
        currentFragment.tracked.add(signal);
      }
      return signal[GET];
    } else {
      return signal;
    }
  }

  private fn: () => T;
  private prevDeps: Set<Signal<unknown>>;
  constructor(fn: () => T) {
    super((undefined as any) as T);
    this.fn = fn;
    this.compute();
  }
  public compute() {
    const fn = this.fn;
    const prevDeps = this.prevDeps;
    const parentTracker = depTracker;
    const nextDeps = (depTracker = new Set());
    const value = fn();
    depTracker = parentTracker;
    for (const d of nextDeps) {
      d[ON](this);
    }
    if (prevDeps) {
      for (const d of prevDeps) {
        if (!nextDeps.has(d)) {
          d[OFF](this);
        }
      }
      this[SET](value);
    } else {
      this[GET] = value;
    }
    this.prevDeps = nextDeps;
    return value;
  }
  public cleanup() {
    for (const d of this.prevDeps) {
      d[OFF](this);
    }
  }
}

export function compute<T>(fn: () => T) {
  return ComputedSignal.create(fn);
}

export function computeInput(fn: () => object, names: string[]) {
  const input = compute(fn);
  if (input instanceof Signal) {
    names.forEach(name =>
      Object.defineProperty(input, name, {
        value: compute(() => get(get(input)[name]))
      })
    );
  }
  return input;
}

export function get<T>(value: MaybeSignal<T>): T {
  if (value instanceof Signal) {
    if (depTracker) {
      depTracker.add(value);
    }
    value = value[GET];
  }
  return value;
}

export function set(value: MaybeSignal<unknown>, newValue: unknown) {
  if (value instanceof Signal) {
    value[SET](newValue);
  }
  return newValue;
}
