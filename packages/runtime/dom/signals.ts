import { currentFragment } from "./dom";
import { Fragment } from "./fragments";

let sid = 0;
let bid = 0;
let batch: Batch;

export interface Batch {
  ___bid: number;
  ___signals: Record<string, UpstreamSignal<unknown>>;
  ___computations: Array<Computation<unknown>>;
  ___effects: Effect[];
  ___values: Record<string, unknown>;
  ___pending: Record<string, Promise<unknown>>;
  ___computationIndex: number;
}

export const enum SignalTypes {
  SOURCE,
  COMPUTATION,
  ASYNC_COMPUTATION,
  EFFECT
}

export interface BaseSignal<V> {
  ___bid: number;
  ___sid: number;
  ___type: SignalTypes;
  ___value: V;
  ___upstream: unknown;
  ___upstreamSingle: 0 | 1;
  ___downstream: DownstreamSignal | DownstreamSignal[] | undefined;
  ___downstreamSingle: 0 | 1;
  ___execFn: ((arg: unknown) => unknown) | undefined;
  ___execObject: Record<string, unknown> | undefined;
  ___execProperty: string | undefined;
  ___cleanup: (() => void) | undefined;
  ___root: Fragment;
}

interface SignalSingleDownstream<V> extends BaseSignal<V> {
  ___downstream: DownstreamSignal | undefined;
  ___downstreamSingle: 1;
}
interface SignalMultipleDownstream<V> extends BaseSignal<V> {
  ___downstream: DownstreamSignal[];
  ___downstreamSingle: 0;
}
interface SignalSingleUpstream<V> extends BaseSignal<V> {
  ___upstream: UpstreamSignalOrValue;
  ___upstreamSingle: 1;
}
interface SignalMultipleUpstream<V> extends BaseSignal<V> {
  ___upstream: UpstreamSignalOrValue[];
  ___upstreamSingle: 0;
}

export type Source<V> = (
  | SignalSingleDownstream<V>
  | SignalMultipleDownstream<V>) & {
  ___type: SignalTypes.SOURCE;
  ___execFn: undefined;
  ___upstream: undefined;
};
export type SyncComputation<V> = (
  | SignalSingleDownstream<V>
  | SignalMultipleDownstream<V>) &
  (SignalMultipleUpstream<V> | SignalSingleUpstream<V>) & {
    ___type: SignalTypes.COMPUTATION;
    ___execFn: (arg: unknown) => V;
  };
export type AsyncComputation<V> = (
  | SignalSingleDownstream<V>
  | SignalMultipleDownstream<V>) &
  (SignalMultipleUpstream<V> | SignalSingleUpstream<V>) & {
    ___type: SignalTypes.ASYNC_COMPUTATION;
    ___execFn: (arg: unknown) => Promise<V>;
  };
export type Effect = (
  | SignalMultipleUpstream<undefined>
  | SignalSingleUpstream<undefined>) & {
  ___type: SignalTypes.EFFECT;
  ___execFn: (arg: unknown) => void;
  ___downstream: undefined;
};

export type Computation<V> = SyncComputation<V> | AsyncComputation<V>;
type UpstreamSignal<V> = Source<V> | Computation<V>;
export type UpstreamSignalOrValue<V = unknown> = UpstreamSignal<V> | V;
export type UpstreamRawValue<T> = T extends UpstreamSignal<infer V> ? V : T;
type UpstreamRawValues<T> = T extends readonly UpstreamSignalOrValue[]
  ? { [I in keyof T]: UpstreamRawValue<T[I]> }
  : UpstreamRawValue<T>;
type DownstreamSignal = Computation<unknown> | Effect;

const pendingBatches: Record<string, Batch> = {};
const noop = () => {};

function createSignal(type: SignalTypes): BaseSignal<unknown> {
  return {
    ___bid: 0,
    ___sid: sid++,
    ___type: type,
    ___value: undefined,
    ___upstream: undefined,
    ___upstreamSingle: 1,
    ___downstream: undefined,
    ___downstreamSingle: 1,
    ___execFn: undefined,
    ___execObject: undefined,
    ___execProperty: undefined,
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
  type = SignalTypes.COMPUTATION,
  ensureComputation = false
) {
  let computation: SyncComputation<V> | undefined = ensureComputation
    ? (createSignal(type) as SyncComputation<V>)
    : undefined;
  let hasUpstreamFromAnotherRoot = false;

  if (upstreamSingle) {
    if (isSignal(upstream)) {
      //
      computation = computation || (createSignal(type) as SyncComputation<V>);
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

  if (computation) {
    computation.___execFn = fn;
    computation.___upstream = upstream;
    computation.___upstreamSingle = upstreamSingle;
    if (hasUpstreamFromAnotherRoot) {
      // only computations that depend on an upstream signal
      // owned by a different root fragment need manual cleanup
      // GC is sufficient otherwise
      computation.___cleanup = cleanup;
      currentFragment!.___tracked.add(computation as (typeof computation & {
        ___cleanup: () => void;
      }));
    }
    if (type === SignalTypes.EFFECT) {
      batch.___effects.push((computation as unknown) as Effect);
    } else {
      batch.___computations.push(computation);
    }
    return computation;
  }

  return fn(upstream as UpstreamRawValues<U>);
}

export function createAsyncComputation<V, U>(
  fn: (arg: UpstreamRawValues<U>) => Promise<V>,
  upstream: U,
  upstreamSingle: 0 | 1
) {
  awaitPendingUpstream = _awaitPendingUpstream;
  awaitPendingComputations = _awaitPendingComputations;
  reconcilePendingBatches = _reconcilePendingBatches;
  return createComputation(
    fn as any,
    upstream,
    upstreamSingle,
    SignalTypes.ASYNC_COMPUTATION,
    true
  ) as unknown as AsyncComputation<V>;
}

export function createEffect<U>(
  fn: (arg: UpstreamRawValues<U>) => void,
  upstream: U,
  upstreamSingle: 0 | 1
) {
  // TODO: will need to allow user-defined cleanup
  return createComputation(
    fn,
    upstream,
    upstreamSingle,
    SignalTypes.EFFECT,
    true
  ) as unknown as Effect;
}

export function createPropertyComputation<
  P extends string,
  O extends Record<string, unknown>
>(property: P, upstream: UpstreamSignalOrValue<O>) {
  if (isSignal(upstream)) {
    const computation = createComputation(
      execComputeProperty as any,
      upstream,
      1
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
    SignalTypes.EFFECT,
    true
  ) as unknown as Effect;
  effect.___execObject = object;
  effect.___execProperty = property;
  return effect;
}

function subscribe<V>(source: UpstreamSignal<V>, listener: DownstreamSignal) {
  if (isSingleDownstream(source)) {
    if (source.___downstream === undefined) {
      source.___downstream = listener;
    } else {
      ((source as BaseSignal<V>) as SignalMultipleDownstream<
        V
      >).___downstream = [source.___downstream, listener];
      ((source as BaseSignal<V>) as SignalMultipleDownstream<
        V
      >).___downstreamSingle = 0;
    }
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
  if (isSingleDownstream(source)) {
    // assert(source.___downstream === listener)
    source.___downstream = undefined;
  } else {
    const downstream = source.___downstream;
    // assert(downstream.length >= 1)
    const removed = downstream.pop()!;
    if (removed !== listener) {
      // assert(downstream.indexOf(listener) >= 0)
      downstream[downstream.indexOf(listener)] = removed;
    }
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

function isSingleDownstream<V>(
  signal: BaseSignal<V>
): signal is SignalSingleDownstream<V> {
  return signal.___downstreamSingle === 1;
}

function isSingleUpstream<V>(
  signal: BaseSignal<V>
): signal is SignalSingleUpstream<V> {
  return signal.___upstreamSingle === 1;
}

export function setSignalValue<V>(signal: UpstreamSignal<V>, nextValue: V) {
  if (signal.___value !== nextValue) {
    if (batch) {
      const id = signal.___sid;
      batch.___values[id] = nextValue;
      batch.___signals[id] = signal;
    } else {
      signal.___value = nextValue;
    }
    if (signal.___downstreamSingle === 1) {
      if (signal.___downstream) {
        queueDownstream(signal.___downstream);
      }
    } else {
      const downstream = signal.___downstream;
      for (let i = downstream.length - 1; i >= 0; i--) {
        queueDownstream(downstream[i]);
      }
    }
  }
}

function queueDownstream(downstream: DownstreamSignal) {
  const isEffect = downstream.___type === SignalTypes.EFFECT;
  const batchTarget = isEffect ? batch.___effects : batch.___computations;
  const batchIndex = isEffect ? 0 : batch.___computationIndex;
  insertIntoBatch(batchTarget, batchIndex, downstream);
}

function updateComputation<V>(computation: Computation<V>) {
  if (!awaitPendingUpstream(computation)) {
    setSignalValue(computation, execDownstreamSignal(computation));
  }
}

function execDownstreamSignal(downstream: DownstreamSignal) {
  const upstream = downstream.___upstream;
  return downstream.___execFn(
    downstream.___upstreamSingle
      ? get(upstream)
      : (upstream as UpstreamSignalOrValue[]).map(get)
  );
}

let awaitPendingUpstream: typeof _awaitPendingUpstream = noop as any;
function _awaitPendingUpstream<V>(computation: Computation<V>) {
  const async = computation.___type === SignalTypes.ASYNC_COMPUTATION;
  let pendingUpstream: Array<Promise<unknown>> | Promise<unknown> | undefined;
  let pendingCount = 0;
  if (batch) {
    if (isSingleUpstream(computation)) {
      const upstream = computation.___upstream;
      if (isSignal(upstream)) {
        pendingUpstream = batch.___pending[upstream.___sid];
        pendingCount = pendingUpstream ? 1 : 0;
      }
    } else {
      const upstream = computation.___upstream;
      for (let i = upstream.length - 1; i >= 0; i--) {
        const up = upstream[i];
        let pending: Promise<unknown>;
        if (isSignal(up) && (pending = batch.___pending[up.___sid])) {
          if (++pendingCount === 1) {
            pendingUpstream = pending;
          } else if (pendingCount === 2) {
            pendingUpstream = [pendingUpstream as Promise<unknown>, pending];
          } else {
            (pendingUpstream as Array<Promise<unknown>>).push(pending);
          }
        }
      }
    }
  }
  if (pendingCount > 0 || async) {
    let computed: V;
    const storedBatch = batch;
    const id = computation.___sid;
    batch.___signals[id] = computation;
    batch.___pending[id] = (pendingCount > 0
      ? (pendingCount === 1
          ? (pendingUpstream as Promise<unknown>)
          : Promise.all(pendingUpstream as Array<Promise<unknown>>)
        ).then(() => {
          batch = storedBatch;
          computed = execDownstreamSignal(computation) as V;
          batch = undefined as any;
          return async && computed;
        })
      : (execDownstreamSignal(computation) as Promise<V>)
    ).then(result => {
      storedBatch.___values[id] = async ? result : computed;
    });
    return true;
  }
}

export function isSignal<T>(
  signalOrValue: UpstreamSignalOrValue<T>
): signalOrValue is UpstreamSignal<T> {
  return signalOrValue && (signalOrValue as UpstreamSignal<T>).___type >= 0;
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
    if (batch && batch.___values.hasOwnProperty((id = value.___sid))) {
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
    ___signals: {},
    ___computations: [],
    ___effects: [],
    ___values: {},
    ___pending: {},
    ___computationIndex: 0
  });
}

function endBatch(b: Batch, fn?: (err?: Error) => void) {
  try {
    if (b !== batch) throw new Error("endBatch attempting to end wrong batch");
    set = setInComputation;
    
    while (batch.___computationIndex < batch.___computations.length) {
      updateComputation(batch.___computations[batch.___computationIndex++]);
    }
    if (!awaitPendingComputations()) {
      for (const id in batch.___signals) {
        const signal = batch.___signals[id];
        if (signal.___bid <= batch.___bid) {
          signal.___bid = batch.___bid;
          signal.___value = batch.___values[id];
        }
      }
      reconcilePendingBatches();
      const bt = batch;
      requestAnimationFrame(() => {
        for (const _effect of bt.___effects) {
          if (_effect.___bid <= bt.___bid) {
            _effect.___bid = bt.___bid;
            execDownstreamSignal(_effect);
          }
        }
        fn && fn();
      })
    } else {
      fn && fn();
    }
  } finally {
    set = setAndBeginBatch;
    batch = undefined as any;
  }
}

export function runInBatch<T extends (...args: any) => any>(fn: T): Promise<ReturnType<T>> {
  return new Promise((resolve, reject) => {
    try {
      const batch = beginBatch();
      const result = fn();
      endBatch(batch, (err) => err ? reject(err) : resolve(result));
    } catch(e) {
      reject(e);
    }
  })
}

let awaitPendingComputations: typeof _awaitPendingComputations = noop as any;
function _awaitPendingComputations() {
  const pendingIds = Object.keys(batch.___pending);
  if (pendingIds.length) {
    const all = Object.values(batch.___pending);
    const storedBatch = (pendingBatches[batch.___bid] = batch);
    Promise.all(all).then(() => {
      batch = storedBatch;
      delete pendingBatches[batch.___bid];
      for (const id of pendingIds) {
        const signal = batch.___signals[id];
        const value = batch.___values[id];
        delete batch.___pending[id];
        setSignalValue(signal, value);
      }
      endBatch(batch);
    });
    return true;
  }
}

let reconcilePendingBatches: typeof _reconcilePendingBatches = noop as any;
function _reconcilePendingBatches() {
  // When a batch completes but there are pending batches
  // that have been suspended, we need to check if the
  // completed batch affects any of the pending batches
  for (const batchId in pendingBatches) {
    const pendingBatch = pendingBatches[batchId];
    for (const signalId in batch.___signals) {
      const signal = pendingBatch.___signals[signalId];
      if (signal) {
        // If the signal exists in the pending batch
        // and the completed batch was created after the pending batch
        // then the matching signal in the pending batch is out of date.
        // However, everything stems from the source, so we only need to
        // handle those here.
        if (+batchId <= batch.___bid && signal.___type === SignalTypes.SOURCE) {
          unqueue(signal, pendingBatch);
        }
      } else {
        // If a signal from the completed batch is *not* in the pending batch
        // it can affect the pending batch regardless of which batch was created first.
        // If any of the downstream computations from this signal are in the pending batch
        // they may compute differently now that this upstream value has changed.
        // We need to ensure that if any of these computations have already been computed
        // that they will re-compute.
        forEachDownstream(batch.___signals[signalId], downstream => {
          if (pendingBatch.___signals[downstream.___sid]) {
            insertIntoBatch(
              pendingBatch.___computations,
              pendingBatch.___computationIndex,
              downstream
            );
          }
        });
      }
    }
  }
}

// eslint-disable-next-line
function forEachUpstream(
  signal: Source<unknown> | DownstreamSignal,
  fn: (arg: UpstreamSignalOrValue) => void
) {
  if (signal.___type !== SignalTypes.SOURCE) {
    if (isSingleUpstream(signal)) {
      fn(signal.___upstream);
    } else {
      const upstream = signal.___upstream;
      for (let i = upstream.length - 1; i >= 0; i--) {
        fn(upstream[i]);
      }
    }
  }
}

function forEachDownstream<V>(
  signal: UpstreamSignal<V>,
  fn: (arg: DownstreamSignal) => void
) {
  if (isSingleDownstream(signal)) {
    if (signal.___downstream) {
      fn(signal.___downstream);
    }
  } else {
    const downstream = signal.___downstream;
    for (let i = downstream.length - 1; i >= 0; i--) {
      fn(downstream[i]);
    }
  }
}

function unqueue(
  signal: Effect | UpstreamSignal<unknown>,
  pendingBatch: Batch
) {
  const id = signal.___sid;
  delete pendingBatch.___values[id];
  delete pendingBatch.___signals[id];
  delete pendingBatch.___pending[id];

  if (signal.___type === SignalTypes.EFFECT) {
    removeFromBatch(pendingBatch.___effects, 0, signal);
  } else {
    if (signal.___type !== SignalTypes.SOURCE) {
      // remove the computation if it's still pending
      // we don't need to compute it anymore
      removeFromBatch(
        pendingBatch.___computations,
        pendingBatch.___computationIndex,
        signal
      );
    }

    // We may be able to unqueue the downstream values of this signal
    forEachDownstream(signal, downstream => {
      if (!isSingleUpstream(downstream)) {
        // if the downstream signal has other upstreams
        // we need to check if they're in the pending batch
        for (let i = downstream.___upstream.length - 1; i >= 0; i--) {
          const upstream = downstream.___upstream[i];
          const upstreamId =
            upstream && (upstream as UpstreamSignal<unknown>).___sid;
          if (pendingBatch.___signals[upstreamId]) {
            // if we can't unqueue the downstream signal, we need to ensure
            // it re-computes if it was already computed since we've changed
            // the value of one of its upstreams
            if (downstream.___type !== SignalTypes.EFFECT) {
              insertIntoBatch(
                pendingBatch.___computations,
                pendingBatch.___computationIndex,
                downstream
              );
            }
            return;
          }
        }
      }

      // if it only had the one upstream, or none of the other
      // upstreams are in the pending batch, we can unqueue it
      unqueue(downstream, pendingBatch);
    });
  }
}

function insertIntoBatch<T extends DownstreamSignal>(
  array: T[],
  index: number,
  object: T
) {
  index = findBatchIndex(array, index, object);

  if (array[index] !== object) {
    array.splice(index, 0, object);
  }
}

function removeFromBatch<T extends DownstreamSignal>(
  array: T[],
  index: number,
  object: T
) {
  index = findBatchIndex(array, index, object);

  if (array[index] === object) {
    array.splice(index, 1);
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
