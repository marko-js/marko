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
  public [GET]: T;
  public sid: number;
  constructor(current: T) {
    this.sid = sid++;
    this[IS_SIGNAL] = true;
    this[GET] = current;
    this[LISTENERS] = new Set();
  }
  public [SET](next: T) {
    this[GET] = next;
    for (const l of this[LISTENERS]) {
      l();
    }
  }
  public [ON](listener: () => void) {
    this[LISTENERS].add(listener);
  }
  public [OFF](listener: () => void) {
    this[LISTENERS].delete(listener);
  }
}

export function compute<T>(fn: () => T) {
  let signal: Signal<T>;
  let prevDeps: Set<Signal<unknown>>;

  const _compute = () => {
    const parentTracker = depTracker;
    const nextDeps = (depTracker = new Set());
    const value = fn();
    depTracker = parentTracker;
    for (const d of nextDeps) {
      d[ON](_compute);
    }
    if (prevDeps) {
      for (const d of prevDeps) {
        if (!nextDeps.has(d)) {
          d[OFF](_compute);
        }
      }
    }
    prevDeps = nextDeps;
    if (signal) {
      signal[SET](value);
    }
    return value;
  };

  const computed = _compute();

  if (prevDeps!.size) {
    signal = new Signal(computed);
    (signal as any).compute = _compute;
    _compute.signal = signal;
    if (currentFragment) {
      currentFragment.cleanup.add(() => {
        for (const d of prevDeps) {
          d[OFF](_compute);
        }
      });
    }
    return signal;
  } else {
    return computed;
  }
}

export function computeInput(fn: () => object, names: string[]) {
  const input = compute(fn);
  if (isSignal(input)) {
    names.forEach(name =>
      Object.defineProperty(input, name, {
        value: compute(() => get(get(input)[name]))
      })
    );
  }
  return input;
}

export function get<T>(value: MaybeSignal<T>): T {
  if (isSignal(value)) {
    if (depTracker) {
      depTracker.add(value);
    }
    value = value[GET];
  }
  return value;
}

export function set(value: MaybeSignal<unknown>, newValue: unknown) {
  if (isSignal(value)) {
    value[SET](newValue);
  }
  return newValue;
}

export function isSignal(value: MaybeSignal<any>): value is Signal<any> {
  return value[IS_SIGNAL] === true;
}
