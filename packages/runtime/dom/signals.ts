import { Fragment, currentFragment } from "./fragments";

let sid = 0;
let bid = 0;
let batch: Batch;

export interface Batch {
  ___bid: number;
  ___computations: Computation[];
  ___effects: Effect[];
  ___values: Record<string, unknown>;
  ___signals: Record<string, UpstreamSignal<unknown>>;
  ___computationIndex: number;
  ___executing: boolean;
}

export const enum SignalTypes {
  SOURCE,
  COMPUTATION,
  ASYNC_COMPUTATION,
  EFFECT,
  USER_EFFECT
}

export interface BaseSignal<V> {
  ___bid: number;
  ___sid: number;
  ___type: SignalTypes;
  ___value: V;
  ___upstream: unknown;
  ___upstreamSingle: 0 | 1;
  ___downstream: DownstreamSignal[] | undefined;
  ___execFn: ((arg: unknown) => unknown) | undefined;
  ___execObject: Record<string, unknown> | undefined;
  ___execProperty: string | undefined;
  ___execStart: ExecChain | undefined;
  ___execEnd: ExecChain | undefined;
  ___consumable: boolean;
  ___cleanup: (() => void) | undefined;
  ___root: Fragment;
}

type ExecChain = ((...args:  unknown[]) => unknown) & { next?: ExecChain };

interface SignalWithDownstream<V> extends BaseSignal<V> {
  ___downstream: DownstreamSignal[];
}
interface SignalSingleUpstream<V> extends BaseSignal<V> {
  ___upstream: UpstreamSignalOrValue;
  ___upstreamSingle: 1;
}
interface SignalMultipleUpstream<V> extends BaseSignal<V> {
  ___upstream: UpstreamSignalOrValue[];
  ___upstreamSingle: 0;
}

type SignalWithUpstream<V> = SignalSingleUpstream<V> | SignalMultipleUpstream<V>;

export type Source<V> = SignalWithDownstream<V> & {
  ___type: SignalTypes.SOURCE;
  ___execFn: undefined;
  ___upstream: undefined;
};
export type SyncComputation<V> = SignalWithUpstream<V> & SignalWithDownstream<V> & {
  ___type: SignalTypes.COMPUTATION;
  ___execFn: (arg: unknown) => V;
};
export type ConsumableComputation<V> = SyncComputation<V> & {
  ___execFn: typeof execConsumable;
  ___execStart: ExecChain;
  ___execEnd: ExecChain;
};
export type AsyncComputation<V> = SignalWithUpstream<V> & SignalWithDownstream<V> & {
  ___type: SignalTypes.ASYNC_COMPUTATION;
  ___execFn: (arg: unknown) => Promise<V>;
};
export type Effect = SignalWithUpstream<undefined> & {
  ___type: SignalTypes.EFFECT;
  ___execFn: (arg: unknown) => void;
  ___downstream: undefined;
};
export type UserEffect = SignalWithUpstream<undefined> & {
  ___type: SignalTypes.USER_EFFECT;
  ___execFn: (arg: unknown) => void;
  ___downstream: undefined;
};

export type Computation<V = unknown> = SyncComputation<V> | AsyncComputation<V>;
type UpstreamSignal<V = unknown> = Source<V> | Computation<V>;
export type UpstreamSignalOrValue<V = unknown> = UpstreamSignal<V> | V;
export type UpstreamRawValue<T> = T extends UpstreamSignal<infer V> ? V : T;
type UpstreamRawValues<T> = T extends readonly UpstreamSignalOrValue[]
  ? { [I in keyof T]: UpstreamRawValue<T[I]> }
  : UpstreamRawValue<T>;
type DownstreamSignal = Computation<unknown> | Effect | UserEffect;

function createSignal(type: SignalTypes): BaseSignal<unknown> {
  return {
    ___bid: 0,
    ___sid: sid++,
    ___type: type,
    ___value: undefined,
    ___upstream: undefined,
    ___upstreamSingle: 1,
    ___downstream: isEffectType(type) ? undefined : [],
    ___execFn: undefined,
    ___execObject: undefined,
    ___execProperty: undefined,
    ___execStart: undefined,
    ___execEnd: undefined,
    ___consumable: false,
    ___cleanup: undefined,
    ___root: currentFragment!
  };
}

export function createSource<V>(initialValue: V) {
  const source = createSignal(SignalTypes.SOURCE) as Source<V>;
  source.___value = initialValue;
  return source;
}

export function createComputation<
  V,
  U extends UpstreamSignalOrValue | readonly UpstreamSignalOrValue[]
>(
  fn: (arg: UpstreamRawValues<U>) => V,
  upstream: U,
  upstreamSingle: 0 | 1,
  consumable = false,
  type = SignalTypes.COMPUTATION,
  ensureComputation = false
) {
  let computation: SyncComputation<V> | undefined;
  let hasUpstreamFromAnotherRoot = false;

  if (upstreamSingle) {
    if (isSignal(upstream)) {
      if (isConsumableComputation(upstream)) {
        if (!consumable) {
          if (isEffectType(type)) {
            batch.___effects.push((upstream as unknown) as Effect);
          } else {
            batch.___computations.push(upstream);
          }
        }
        upstream.___type = type as any;
        upstream.___consumable = consumable;
        upstream.___execEnd = upstream.___execEnd.next = fn;
        return upstream as SyncComputation<V>;
      }
      computation = createSignal(type) as SyncComputation<V>;
      hasUpstreamFromAnotherRoot = upstream.___root !== currentFragment;
      subscribe(upstream, computation);
    }
  } else {
    const upstreamArray = (upstream as unknown) as UpstreamSignalOrValue[];
    for (let i = upstreamArray.length - 1; i >= 0; i--) {
      const upstreamEntry = upstreamArray[i];
      if (isSignal(upstreamEntry)) {
        computation = computation || (createSignal(type) as SyncComputation<V>);
        hasUpstreamFromAnotherRoot =
          hasUpstreamFromAnotherRoot ||
          upstreamEntry.___root !== currentFragment;
        subscribe(upstreamEntry, computation);
      }
    }
  }

  if (ensureComputation || computation) {
    computation = computation || (createSignal(type) as SyncComputation<V>);
    computation.___upstream = upstream;
    computation.___upstreamSingle = upstreamSingle;

    if (consumable) {
      computation.___consumable = consumable;
      computation.___execFn = execConsumable;
      computation.___execStart = computation.___execEnd = fn;
    } else {
      computation.___execFn = fn;
      if (isEffectType(type)) {
        batch.___effects.push((computation as unknown) as Effect);
      } else {
        batch.___computations.push(computation);
      }
    }

    if (hasUpstreamFromAnotherRoot) {
      // only computations that depend on an upstream signal
      // owned by a different root fragment need manual cleanup
      // GC is sufficient otherwise
      computation.___cleanup = cleanup;
      currentFragment!.___tracked.add(computation as (typeof computation & {
        ___cleanup: () => void;
      }));
    }
    return computation;
  }

  return fn(upstream as UpstreamRawValues<U>);
}

function execConsumable<V>(
  this: ConsumableComputation<V>,
  originalInput: unknown
): V {
  let fn: ExecChain | undefined = this.___execStart;
  let inputValue: unknown = originalInput;
  let isEffect = isEffectType((this as any).___type);
  while (fn) {
    const next = fn.next;
    if (isEffect && !next) {
      if (inputValue === this.___value) return undefined as any as V;
      else this.___value = inputValue as V;
    }
    inputValue = fn.call(this, inputValue);
    fn = next;
  }
  return inputValue as V;
}

export function createEffect<U>(
  fn: (arg: UpstreamRawValues<U>) => void,
  upstream: U,
  upstreamSingle: 0 | 1,
  type = SignalTypes.EFFECT
) {
  // TODO: will need to allow user-defined cleanup
  return createComputation(
    fn,
    upstream,
    upstreamSingle,
    false,
    type,
    true
  ) as unknown as Effect;
}

export function createPropertyComputation<
  P extends string,
  O extends Record<string, unknown>
>(property: P, upstream: UpstreamSignalOrValue<O>, consumable = false) {
  if (isSignal(upstream)) {
    const computation = createComputation(
      execComputeProperty as any,
      upstream,
      1,
      false && consumable
    ) as SyncComputation<O[P]>;
    computation.___execProperty = property;
    return computation;
  } else {
    return upstream[property];
  }
}

export function createPropertyEffect<
  P extends string,
  U extends UpstreamSignalOrValue
>(object: Record<string, unknown>, property: P, upstream: U) {
  const effect = createComputation(
    execSetProperty,
    upstream,
    1,
    false,
    SignalTypes.EFFECT,
    true
  ) as unknown as Effect;
  effect.___execObject = object;
  effect.___execProperty = property;
  return effect;
}

function subscribe<V>(source: UpstreamSignal<V>, listener: DownstreamSignal) {
  if (source.___downstream === undefined) {
    source.___downstream = [listener];
  } else {
    source.___downstream.push(listener);
  }
}

function cleanup(this: DownstreamSignal) {
  if (isSingleUpstream(this)) {
    if (isSignal(this.___upstream)) {
      unsubscribe(this.___upstream, this);
    }
  } else {
    const u = this.___upstream;
    for (let i = u.length - 1; i >= 0; i--) {
      const upstream = u[i];
      if (isSignal(upstream)) {
        unsubscribe(upstream, this);
      }
    }
  }
}

function unsubscribe(
  source: UpstreamSignal<unknown>,
  listener: DownstreamSignal
) {
  const downstream = source.___downstream;
  // assert(downstream.length >= 1)
  const removed = downstream.pop()!;
  if (removed !== listener) {
    // assert(downstream.indexOf(listener) >= 0)
    downstream[downstream.indexOf(listener)] = removed;
  }
}

function execComputeProperty<V>(
  this: Computation<V>,
  signalValue: Record<string, V>
) {
  return signalValue[this.___execProperty!];
}

function execSetProperty(this: Effect, signalValue: unknown) {
  this.___execObject![this.___execProperty!] = signalValue;
}

function isSingleUpstream<V>(
  signal: BaseSignal<V>
): signal is SignalSingleUpstream<V> {
  return signal.___upstreamSingle === 1;
}

function isConsumableComputation<V>(
  signal: BaseSignal<V>
): signal is ConsumableComputation<V> {
  return signal.___consumable;
}

export function setSignalValue<V>(signal: UpstreamSignal<V>, nextValue: V) {
  if (signal.___value !== nextValue) {
    const id = signal.___sid;
    const downstream = signal.___downstream;
    batch.___values[id] = nextValue;
    batch.___signals[id] = signal;
    for (let i = downstream.length - 1; i >= 0; i--) {
      queueDownstream(downstream[i]);
    }
  }
}

function queueDownstream(downstream: DownstreamSignal) {
  const isEffect = isEffectType(downstream.___type);
  const batchTarget = isEffect ? batch.___effects : batch.___computations;
  const batchIndex = isEffect ? 0 : batch.___computationIndex;
  insertIntoBatch(batchTarget, batchIndex, downstream);
}

function updateComputation<V>(computation: Computation<V>) {
  setSignalValue(computation, execDownstreamSignal(computation));
}

function execDownstreamSignal(downstream: DownstreamSignal) {
  const upstream = downstream.___upstream;
  return downstream.___execFn(
    downstream.___upstreamSingle
      ? get(upstream)
      : (upstream as UpstreamSignalOrValue[]).map(get)
  );
}

export function isSignal<T>(
  signalOrValue: UpstreamSignalOrValue<T>
): signalOrValue is UpstreamSignal<T> {
  return signalOrValue && (signalOrValue as UpstreamSignal<T>).___type >= 0;
}

function isEffectType(type: SignalTypes) {
  return type === SignalTypes.EFFECT || type === SignalTypes.USER_EFFECT
}

export function dynamicKeys<
  T extends UpstreamSignalOrValue<Record<string, unknown>>
>(object: T, watchedKeys: string[]) {
  if (isSignal(object)) {
    watchedKeys.forEach(
      key => (object[key] = createPropertyComputation(key, object))
    );
  }
  return object;
}

export function get<T>(value: UpstreamSignalOrValue<T>): T {
  if (isSignal(value)) {
    let id: number;
    if (batch && batch.___executing && batch.___values.hasOwnProperty((id = value.___sid))) {
      value = batch.___values[id] as T;
    } else {
      value = value.___value!;
    }
  }
  return value;
}

export let set = setAndBeginBatch;

function setAndBeginBatch(value: UpstreamSignalOrValue, newValue: unknown) {
  if (isSignal(value)) {
    const localBatch = beginBatch();
    queueMicrotask(() => endBatch(localBatch));
    setSignalValue(value, newValue);
  }
  return newValue;
}

function setInBatch(value: UpstreamSignalOrValue, newValue: unknown) {
  if (isSignal(value)) {
    setSignalValue(value, newValue);
  }
  return newValue;
}

function setInComputation(value: UpstreamSignalOrValue, newValue: unknown) {
  throw new Error("You are attempting to set a signal in a pure computation");
}

export function beginBatch() {
  set = setInBatch;
  return batch = ({
    ___bid: ++bid,
    ___computations: [],
    ___effects: [],
    ___values: {},
    ___signals: {},
    ___computationIndex: 0,
    ___executing: false
  });
}

function endBatch(b: Batch) {
  try {
    if (b !== batch) throw new Error("endBatch attempting to end wrong batch");
    set = setInComputation;
    batch.___executing = true;
    while (batch.___computationIndex < batch.___computations.length) {
      updateComputation(batch.___computations[batch.___computationIndex++]);
    }
    for (const id in batch.___signals) {
      batch.___signals[id].___value = batch.___values[id];
    }
    runEffects(batch.___effects);
  } finally {
    set = setAndBeginBatch;
    batch = undefined as any;
  }
}

export function runInBatch<T extends (...args: any) => any>(fn: T): ReturnType<T> {
  const batch = beginBatch();
  const result = fn();
  endBatch(batch);
  return result;
}

function runEffects(effects: (Effect | UserEffect)[]) {
  let i: number;
  let len = effects.length;
  let userLength = 0;
  for(i = 0; i < len; i++) {
    const v = effects[i];
    if (v.___type === SignalTypes.USER_EFFECT) {
      effects[userLength++] = v;
    } else execDownstreamSignal(v);
  }

  for(i = 0; i < userLength; i++) {
    const v = effects[i];
    if (v.___bid <= bid) {
      v.___bid = bid;
      execDownstreamSignal(v);
    }
  }
}

function insertIntoBatch<T extends DownstreamSignal>(
  array: T[],
  index: number,
  object: T
) {
  index = findBatchIndex(array, index, object);

  if (array[index] !== object) {
    for (let i = array.length-1; i >= index; i--) {
      array[i+1] = array[i];
    }
    array[index] = object;
  }
}

function findBatchIndex<T extends DownstreamSignal>(
  array: T[],
  index: number,
  object: T
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

  return index;
}
