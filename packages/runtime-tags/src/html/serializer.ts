import type { Boundary } from "./writer";

export const K_SCOPE_ID = Symbol("Scope ID");
const kTouchedIterator = Symbol.for("marko.touchedIterator");
const { hasOwnProperty } = {};
const Generator = (function* () {})().constructor;
const AsyncGenerator = (async function* () {})().constructor;
patchIteratorNext(Generator.prototype);
patchIteratorNext(AsyncGenerator.prototype);

interface Registered {
  id: string;
  access: string;
  scope: unknown;
}

interface ScopeInternals {
  [K_SCOPE_ID]?: number;
}

export type ScopeFlush = [scopeId: number, scope: object, props: object];

export interface SerializeChannel {
  readyId?: string;
  parent?: SerializeChannel;
}
interface Mutation {
  value: unknown;
  object: unknown;
  property: string;
  channel: SerializeChannel | undefined;
  valueId?: string | null;
}

type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

const REGISTRY = new WeakMap<WeakKey, Registered>();
const KNOWN_SYMBOLS = (() => {
  const KNOWN_SYMBOLS = new Map<symbol, string>();
  for (const name of Object.getOwnPropertyNames(Symbol)) {
    const symbol = (Symbol as any)[name];
    if (typeof symbol === "symbol") {
      KNOWN_SYMBOLS.set(symbol, "Symbol." + name);
    }
  }

  return KNOWN_SYMBOLS;
})();
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const KNOWN_FUNCTIONS = new Map<Function, string>([
  // This is by no means an exhaustive list,
  // but it should cover most of the built-in functions.
  [AggregateError, "AggregateError"],
  [Array, "Array"],
  [Array.from, "Array.from"],
  [Array.isArray, "Array.isArray"],
  [Array.of, "Array.of"],
  [ArrayBuffer, "ArrayBuffer"],
  [ArrayBuffer.isView, "ArrayBuffer.isView"],
  [Atomics.add, "Atomics.add"],
  [Atomics.and, "Atomics.and"],
  [Atomics.compareExchange, "Atomics.compareExchange"],
  [Atomics.exchange, "Atomics.exchange"],
  [Atomics.isLockFree, "Atomics.isLockFree"],
  [Atomics.load, "Atomics.load"],
  [Atomics.notify, "Atomics.notify"],
  [Atomics.or, "Atomics.or"],
  [Atomics.store, "Atomics.store"],
  [Atomics.sub, "Atomics.sub"],
  [Atomics.wait, "Atomics.wait"],
  [BigInt, "BigInt"],
  [BigInt.asIntN, "BigInt.asIntN"],
  [BigInt.asUintN, "BigInt.asUintN"],
  [BigInt64Array, "BigInt64Array"],
  [BigInt64Array.from, "BigInt64Array.from"],
  [BigInt64Array.of, "BigInt64Array.of"],
  [BigUint64Array, "BigUint64Array"],
  [BigUint64Array.from, "BigUint64Array.from"],
  [BigUint64Array.of, "BigUint64Array.of"],
  [Boolean, "Boolean"],
  [console.assert, "console.assert"],
  [console.clear, "console.clear"],
  [console.count, "console.count"],
  [console.countReset, "console.countReset"],
  [console.debug, "console.debug"],
  [console.dir, "console.dir"],
  [console.dirxml, "console.dirxml"],
  [console.error, "console.error"],
  [console.group, "console.group"],
  [console.groupCollapsed, "console.groupCollapsed"],
  [console.groupEnd, "console.groupEnd"],
  [console.info, "console.info"],
  [console.log, "console.log"],
  [console.table, "console.table"],
  [console.time, "console.time"],
  [console.timeEnd, "console.timeEnd"],
  [console.timeLog, "console.timeLog"],
  [console.timeStamp, "console.timeStamp"],
  [console.trace, "console.trace"],
  [console.warn, "console.warn"],
  [DataView, "DataView"],
  [Date, "Date"],
  [Date.now, "Date.now"],
  [Date.parse, "Date.parse"],
  [Date.UTC, "Date.UTC"],
  [decodeURI, "decodeURI"],
  [decodeURIComponent, "decodeURIComponent"],
  [encodeURI, "encodeURI"],
  [encodeURIComponent, "encodeURIComponent"],
  [Error, "Error"],
  [EvalError, "EvalError"],
  [Float32Array, "Float32Array"],
  [Float32Array.from, "Float32Array.from"],
  [Float32Array.of, "Float32Array.of"],
  [Float64Array, "Float64Array"],
  [Float64Array.from, "Float64Array.from"],
  [Float64Array.of, "Float64Array.of"],
  [Function, "Function"],
  [globalThis.atob, "atob"],
  [globalThis.btoa, "btoa"],
  [globalThis.clearImmediate, "clearImmediate"],
  [globalThis.clearInterval, "clearInterval"],
  [globalThis.clearTimeout, "clearTimeout"],
  [globalThis.crypto?.getRandomValues, "crypto.getRandomValues"],
  [globalThis.crypto?.randomUUID, "crypto.randomUUID"],
  [globalThis.fetch, "fetch"],
  [globalThis.performance?.now, "performance.now"],
  [globalThis.queueMicrotask, "queueMicrotask"],
  [globalThis.setImmediate, "setImmediate"],
  [globalThis.setInterval, "setInterval"],
  [globalThis.setTimeout, "setTimeout"],
  [globalThis.structuredClone, "structuredClone"],
  [globalThis.URL, "URL"],
  [globalThis.URLSearchParams, "URLSearchParams"],
  [globalThis.WritableStream, "WritableStream"],
  [Int16Array, "Int16Array"],
  [Int16Array.from, "Int16Array.from"],
  [Int16Array.of, "Int16Array.of"],
  [Int32Array, "Int32Array"],
  [Int32Array.from, "Int32Array.from"],
  [Int32Array.of, "Int32Array.of"],
  [Int8Array, "Int8Array"],
  [Int8Array.from, "Int8Array.from"],
  [Int8Array.of, "Int8Array.of"],
  [Intl.Collator, "Intl.Collator"],
  [Intl.DateTimeFormat, "Intl.DateTimeFormat"],
  [Intl.DisplayNames, "Intl.DisplayNames"],
  [Intl.getCanonicalLocales, "Intl.getCanonicalLocales"],
  [Intl.ListFormat, "Intl.ListFormat"],
  [Intl.Locale, "Intl.Locale"],
  [Intl.NumberFormat, "Intl.NumberFormat"],
  [Intl.PluralRules, "Intl.PluralRules"],
  [Intl.RelativeTimeFormat, "Intl.RelativeTimeFormat"],
  [Intl.Segmenter, "Intl.Segmenter"],
  [Intl.supportedValuesOf, "Intl.supportedValuesOf"],
  [isFinite, "isFinite"],
  [isNaN, "isNaN"],
  [JSON.parse, "JSON.parse"],
  [JSON.stringify, "JSON.stringify"],
  [Map, "Map"],
  [Map.groupBy, "Map.groupBy"],
  [Math.abs, "Math.abs"],
  [Math.acos, "Math.acos"],
  [Math.acosh, "Math.acosh"],
  [Math.asin, "Math.asin"],
  [Math.asinh, "Math.asinh"],
  [Math.atan, "Math.atan"],
  [Math.atan2, "Math.atan2"],
  [Math.atanh, "Math.atanh"],
  [Math.cbrt, "Math.cbrt"],
  [Math.ceil, "Math.ceil"],
  [Math.clz32, "Math.clz32"],
  [Math.cos, "Math.cos"],
  [Math.cosh, "Math.cosh"],
  [Math.exp, "Math.exp"],
  [Math.expm1, "Math.expm1"],
  [Math.floor, "Math.floor"],
  [Math.fround, "Math.fround"],
  [Math.hypot, "Math.hypot"],
  [Math.imul, "Math.imul"],
  [Math.log, "Math.log"],
  [Math.log10, "Math.log10"],
  [Math.log1p, "Math.log1p"],
  [Math.log2, "Math.log2"],
  [Math.max, "Math.max"],
  [Math.min, "Math.min"],
  [Math.pow, "Math.pow"],
  [Math.random, "Math.random"],
  [Math.round, "Math.round"],
  [Math.sign, "Math.sign"],
  [Math.sin, "Math.sin"],
  [Math.sinh, "Math.sinh"],
  [Math.sqrt, "Math.sqrt"],
  [Math.tan, "Math.tan"],
  [Math.tanh, "Math.tanh"],
  [Math.trunc, "Math.trunc"],
  [Number, "Number"],
  [Number.isFinite, "Number.isFinite"],
  [Number.isInteger, "Number.isInteger"],
  [Number.isNaN, "Number.isNaN"],
  [Number.isSafeInteger, "Number.isSafeInteger"],
  [Number.parseFloat, "Number.parseFloat"],
  [Number.parseInt, "Number.parseInt"],
  [Object, "Object"],
  [Object.assign, "Object.assign"],
  [Object.create, "Object.create"],
  [Object.defineProperties, "Object.defineProperties"],
  [Object.defineProperty, "Object.defineProperty"],
  [Object.entries, "Object.entries"],
  [Object.freeze, "Object.freeze"],
  [Object.fromEntries, "Object.fromEntries"],
  [Object.getOwnPropertyDescriptor, "Object.getOwnPropertyDescriptor"],
  [Object.getOwnPropertyDescriptors, "Object.getOwnPropertyDescriptors"],
  [Object.getOwnPropertyNames, "Object.getOwnPropertyNames"],
  [Object.getOwnPropertySymbols, "Object.getOwnPropertySymbols"],
  [Object.getPrototypeOf, "Object.getPrototypeOf"],
  [Object.is, "Object.is"],
  [Object.isExtensible, "Object.isExtensible"],
  [Object.isFrozen, "Object.isFrozen"],
  [Object.isSealed, "Object.isSealed"],
  [Object.keys, "Object.keys"],
  [Object.preventExtensions, "Object.preventExtensions"],
  [Object.seal, "Object.seal"],
  [Object.setPrototypeOf, "Object.setPrototypeOf"],
  [Object.values, "Object.values"],
  [parseFloat, "parseFloat"],
  [parseInt, "parseInt"],
  [Promise, "Promise"],
  [Proxy, "Proxy"],
  [RangeError, "RangeError"],
  [ReferenceError, "ReferenceError"],
  [Reflect.apply, "Reflect.apply"],
  [Reflect.construct, "Reflect.construct"],
  [Reflect.defineProperty, "Reflect.defineProperty"],
  [Reflect.deleteProperty, "Reflect.deleteProperty"],
  [Reflect.get, "Reflect.get"],
  [Reflect.getOwnPropertyDescriptor, "Reflect.getOwnPropertyDescriptor"],
  [Reflect.getPrototypeOf, "Reflect.getPrototypeOf"],
  [Reflect.has, "Reflect.has"],
  [Reflect.isExtensible, "Reflect.isExtensible"],
  [Reflect.ownKeys, "Reflect.ownKeys"],
  [Reflect.preventExtensions, "Reflect.preventExtensions"],
  [Reflect.set, "Reflect.set"],
  [Reflect.setPrototypeOf, "Reflect.setPrototypeOf"],
  [RegExp, "RegExp"],
  [Set, "Set"],
  [String, "String"],
  [String.fromCharCode, "String.fromCharCode"],
  [String.fromCodePoint, "String.fromCodePoint"],
  [String.raw, "String.raw"],
  [Symbol, "Symbol"],
  [Symbol.for, "Symbol.for"],
  [SyntaxError, "SyntaxError"],
  [TypeError, "TypeError"],
  [Uint16Array, "Uint16Array"],
  [Uint16Array.from, "Uint16Array.from"],
  [Uint16Array.of, "Uint16Array.of"],
  [Uint32Array, "Uint32Array"],
  [Uint32Array.from, "Uint32Array.from"],
  [Uint32Array.of, "Uint32Array.of"],
  [Uint8Array, "Uint8Array"],
  [Uint8Array.from, "Uint8Array.from"],
  [Uint8Array.of, "Uint8Array.of"],
  [Uint8ClampedArray, "Uint8ClampedArray"],
  [Uint8ClampedArray.from, "Uint8ClampedArray.from"],
  [Uint8ClampedArray.of, "Uint8ClampedArray.of"],
  [URIError, "URIError"],
  [WeakMap, "WeakMap"],
  [WeakSet, "WeakSet"],
]);
const KNOWN_OBJECTS = new Map<object, string>([
  [Atomics, "Atomics"],
  [console, "console"],
  [globalThis, "globalThis"],
  [globalThis.crypto, "crypto"],
  [Intl, "Intl"],
  [JSON, "JSON"],
  [Math, "Math"],
  [Reflect, "Reflect"],
]);

class State {
  ids = 0;
  flush = 0;
  wroteUndefined = false;
  buf = [] as string[];
  strs = new Map<string, Reference>();
  refs = new WeakMap<WeakKey, Reference>();
  assigned = new Set<Reference>();
  boundary: Boundary | undefined = undefined;
  channel: SerializeChannel | undefined = undefined;
  channelDeps: Set<string> | null = null;
  mutated: Mutation[] = [];
}

class Reference {
  declare debug?: Debug;
  public assigns: null | string[] = null;
  public scopeId: number | undefined = undefined;
  public channel: SerializeChannel | undefined = undefined;
  constructor(
    public parent: Reference | null,
    public accessor: string | null,
    public flush: number,
    public pos: number | null = null,
    public id: string | null = null,
  ) {}
}

interface Debug {
  file: string;
  loc: string | 0;
  vars: Record<string, string | [name: string, loc?: string]> | undefined;
}
const DEBUG = new WeakMap<WeakKey, Debug>();
export function setDebugInfo(
  obj: WeakKey,
  file: string,
  loc: string | 0,
  vars?: Record<string, string>,
) {
  DEBUG.set(obj, { file, loc, vars });
}

export class Serializer {
  #state = new State();
  pending(channel?: SerializeChannel) {
    return hasMatchingMutations(this.#state.mutated, channel?.readyId);
  }
  // The channel of the first pending ready gated mutation, if any;
  // draining a channel removes its mutations, so callers loop until none
  // remain.
  pendingReadyChannel() {
    for (const mutation of this.#state.mutated) {
      if (mutation.channel?.readyId) return mutation.channel;
    }
  }
  stringifyScopes(
    flushes: ScopeFlush[],
    boundary: Boundary,
    channel?: SerializeChannel,
  ) {
    try {
      this.#state.boundary = boundary;
      this.#state.channel = channel;
      return writeScopesRoot(this.#state, flushes);
    } finally {
      this.#state.flush++;
      this.#state.buf = [];
    }
  }
  written(val: WeakKey) {
    return this.#state.refs.has(val);
  }
  takeChannelDeps() {
    const deps = this.#state.channelDeps;
    this.#state.channelDeps = null;
    return deps;
  }
  writeCall(
    value: unknown,
    object: unknown,
    property: string,
    channel?: SerializeChannel,
  ) {
    this.#state.mutated.push({
      value,
      object,
      property,
      channel,
    });
  }
}

export function register<T extends WeakKey>(
  id: string,
  val: T,
  scope?: unknown,
) {
  REGISTRY.set(val, {
    id,
    scope,
    access: "_._" + toAccess(toObjectKey(id)),
  });
  return val;
}

export function getRegistered(val: WeakKey) {
  const registered = REGISTRY.get(val);
  if (registered) {
    return { id: registered.id, scope: registered.scope };
  }
}

// A payload with only scope data returns the fill array directly
// (`_=>[1,{a},{b},2,{e}]`). When there are trailing expressions (deferred
// assigns/mutations, which may reference bindings created inside the fill
// and so must evaluate after it) the fill is applied through the serialize
// context instead and the payload ends in `,0` so an arbitrary value from
// its last expression can never be misread as a fill — the browser only
// applies a payload's return value when it is an array.
function writeScopesRoot(state: State, flushes: ScopeFlush[]) {
  const { buf } = state;
  let nextSlotId = -1;
  let fillIndex = -1;

  for (const flush of flushes) {
    const scopeId = flush[0];
    const scope = flush[1];
    const ref =
      state.refs.get(scope) || newScopeReference(state, scope, scopeId);

    // The slot opener is patched in after the props are written — scopes
    // that serialize no props are folded into the next emitted slot's
    // skip count (the browser creates scopes on demand).
    const openIndex = buf.push("") - 1;
    if (writeObjectProps(state, flush[2], ref)) {
      buf[openIndex] =
        nextSlotId === -1
          ? "[" + scopeId + ",{"
          : (scopeId > nextSlotId ? "," + (scopeId - nextSlotId) : "") + ",{";
      if (fillIndex === -1) fillIndex = openIndex;
      nextSlotId = scopeId + 1;
      buf.push("}");
    } else {
      buf.pop();
    }
  }

  if (nextSlotId !== -1) {
    buf.push("]");
  }

  let extras = "";
  if (state.assigned.size || hasChannelMutations(state)) {
    extras = ",0)";
    if (fillIndex !== -1) {
      buf[fillIndex] = "_(" + buf[fillIndex];
      buf.push(")");
    }
    writeAssigned(state);
  }

  let result = extras && "(";
  for (const chunk of buf) {
    result += chunk;
  }
  result += extras;

  // Everything elided and nothing else to flush.
  if (!result) return "";

  if (state.wroteUndefined) {
    state.wroteUndefined = false;
    return "(_,$)=>" + result;
  } else {
    return "_=>" + result;
  }
}

function writeAssigned(state: State) {
  let sep = state.buf.length ? "," : "";

  if (state.assigned.size) {
    let buf = "";
    for (const ref of state.assigned) {
      buf += sep + assignsToString(ref.assigns!, ref.id!);
      ref.assigns = null;
      sep = ",";
    }

    state.buf.push(buf);
    state.assigned = new Set();
  }

  if (hasChannelMutations(state)) {
    const remaining: Mutation[] = [];
    for (const mutation of state.mutated) {
      if (!mutationMatchesReadyId(mutation, state.channel?.readyId)) {
        remaining.push(mutation);
        continue;
      }

      const hasSeen = state.refs.get(mutation.object as object)?.id;
      const objectStartIndex = state.buf.push(
        state.buf.length === 0 ? "" : ",",
      );

      if (writeProp(state, mutation.object, null, "")) {
        const objectRef = state.refs.get(mutation.object as object);
        if (objectRef && objectRef.scopeId === undefined) {
          if (!objectRef.id) {
            objectRef.id = nextRefAccess(state);
            state.buf[objectStartIndex] =
              "(" + objectRef.id + "=" + state.buf[objectStartIndex];
            state.buf.push(")");
          } else if (!hasSeen) {
            state.buf[objectStartIndex] = "(" + state.buf[objectStartIndex];
            state.buf.push(")");
          }
        }
      } else {
        state.buf.push("void 0");
      }

      const valueStartIndex = state.buf.push(
        toAccess(toObjectKey(mutation.property)) + "(",
      );

      if (mutation.value === undefined) {
        // Settling with undefined writes no argument (`_.x.f()`).
      } else if (writeProp(state, mutation.value, null, "")) {
        const valueRef = state.refs.get(mutation.value as object);
        // Scopes never claim a binding (`_(N)` is self-resolving).
        if (valueRef && !valueRef.id && valueRef.scopeId === undefined) {
          valueRef.id = mutation.valueId || nextRefAccess(state);
          state.buf[valueStartIndex] =
            valueRef.id + "=" + state.buf[valueStartIndex];
        }
      } else {
        state.buf.push("void 0");
      }

      state.buf.push(")");
    }
    state.mutated = remaining;

    if (state.assigned.size) {
      writeAssigned(state);
    }
  }
}

function hasChannelMutations(state: State) {
  return hasMatchingMutations(state.mutated, state.channel?.readyId);
}

function hasMatchingMutations(
  mutated: Mutation[],
  readyId: string | undefined,
) {
  for (const mutation of mutated) {
    if (mutationMatchesReadyId(mutation, readyId)) return true;
  }
  return false;
}

function mutationMatchesReadyId(
  mutation: Mutation,
  readyId: string | undefined,
) {
  return mutation.channel?.readyId
    ? mutation.channel.readyId === readyId
    : !readyId;
}

function writeProp(
  state: State,
  val: unknown,
  parent: Reference | null,
  accessor: string,
): boolean {
  switch (typeof val) {
    case "string":
      return writeString(state, val, parent, accessor);

    case "number":
      return writeNumber(state, val);

    case "boolean":
      return writeBoolean(state, val);

    case "bigint":
      return writeBigInt(state, val);

    case "symbol":
      return writeSymbol(state, val, parent, accessor);

    case "function":
      return writeFunction(state, val, parent, accessor);

    case "object":
      return writeObject(state, val, parent, accessor);

    default:
      MARKO_DEBUG && throwUnserializable(state, val, parent, accessor);
      return false;
  }
}

function writeReferenceOr(
  state: State,
  write: (state: State, val: any, ref: Reference) => boolean,
  val: WeakKey,
  parent: Reference | null,
  accessor: string,
) {
  const scopeId = (val as ScopeInternals)[K_SCOPE_ID];

  if (scopeId !== undefined) {
    trackScope(state, val, scopeId);
    state.buf.push("_(" + scopeId + ")");
    return true;
  }

  let ref = state.refs.get(val);
  if (ref) {
    if (!trackChannel(state, ref)) {
      if (MARKO_DEBUG) abortUnreachableChannel(state, val);
      return false;
    }

    if (parent) {
      if (ref.assigns) {
        addAssignment(ref, accessId(state, parent) + toAccess(accessor));
        return false;
      } else if (isCircular(parent, ref)) {
        ensureId(state, ref);
        state.assigned.add(ref);
        addAssignment(ref, accessId(state, parent) + toAccess(accessor));
        return false;
      }
    }

    state.buf.push(ensureId(state, ref));
    return true;
  }

  const registered = REGISTRY.get(val);
  if (registered)
    return writeRegistered(state, val, parent, accessor, registered);

  state.refs.set(
    val,
    (ref = new Reference(parent, accessor, state.flush, state.buf.length)),
  );
  ref.channel = state.channel;

  if (MARKO_DEBUG) {
    ref.debug = DEBUG.get(val);
  }

  if (write(state, val, ref)) return true;

  state.refs.delete(val);
  return false;
}

// Ensures a canonical scope has a reference (recording ancestor stream
// deps when it already does) so `_(id)` emissions stay channel-aware.
function trackScope(state: State, val: WeakKey, scopeId: number) {
  const ref = state.refs.get(val);
  if (ref) {
    trackChannel(state, ref);
  } else {
    newScopeReference(state, val, scopeId);
  }
}

function newScopeReference(state: State, val: WeakKey, scopeId: number) {
  const ref = new Reference(null, null, state.flush);
  ref.scopeId = scopeId;
  ref.channel = state.channel;
  state.refs.set(val, ref);
  if (MARKO_DEBUG) {
    ref.debug = DEBUG.get(val);
  }
  return ref;
}

function writeRegistered(
  state: State,
  val: WeakKey,
  parent: Reference | null,
  accessor: string,
  registered: Registered,
) {
  const { scope } = registered;
  if (scope) {
    // Registered factories never eagerly read from the scope they close
    // over (reads happen inside the returned implementations) and scopes
    // are self-resolving, so the call is written inline at the value
    // position. The reference dedups repeated uses to a single invocation.
    const ref = new Reference(parent, accessor, state.flush, state.buf.length);
    ref.channel = state.channel;
    state.refs.set(val, ref);
    if (MARKO_DEBUG) {
      ref.debug = DEBUG.get(val);
    }

    // The factory is invoked through the serialize context (`_(1,"a3")`),
    // which resolves the scope by id within its render — smaller than
    // referencing the registry and scope separately (`_._.a3(_(1))`). The
    // registry itself is global, so a bare id could not be resolved
    // without the per render context.
    const scopeId = (scope as ScopeInternals)[K_SCOPE_ID]!;
    trackScope(state, scope, scopeId);
    state.buf.push("_(" + scopeId + "," + quote(registered.id, 0) + ")");
  } else {
    state.buf.push(registered.access);
  }
  return true;
}

// Strings longer than this are tracked for reuse — a repeat emits a
// reference binding instead of the literal. Tracking costs no wire bytes
// (the binding is only claimed on a second use); break even on the first
// reuse is ~6 chars, the margin keeps the map from filling with tiny
// strings.
const STRING_DEDUP_LENGTH = 12;

function writeString(
  state: State,
  val: string,
  parent: Reference | null,
  accessor: string,
) {
  if (val.length > STRING_DEDUP_LENGTH) {
    const ref = state.strs.get(val);
    if (ref) {
      if (trackChannel(state, ref)) {
        state.buf.push(ensureId(state, ref));
        return true;
      }
    } else {
      const ref = new Reference(
        parent,
        accessor,
        state.flush,
        state.buf.length,
      );
      ref.channel = state.channel;
      state.strs.set(val, ref);
    }
  }
  state.buf.push(quote(val, 0));
  return true;
}

function writeNumber(state: State, val: number) {
  state.buf.push(val + "");
  return true;
}

function writeBoolean(state: State, val: boolean) {
  state.buf.push(val ? "!0" : "!1");
  return true;
}

function writeBigInt(state: State, val: bigint) {
  state.buf.push(val + "n");
  return true;
}

function writeFunction(
  state: State,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  val: Function,
  parent: Reference | null,
  accessor: string,
) {
  const wellKnownFunction = KNOWN_FUNCTIONS.get(val);
  if (wellKnownFunction) {
    state.buf.push(wellKnownFunction);
    return true;
  }

  return writeReferenceOr(state, writeNever, val, parent, accessor);
}

function writeSymbol(
  state: State,
  val: symbol,
  parent: Reference | null,
  accessor: string,
) {
  const wellKnownSymbol = KNOWN_SYMBOLS.get(val);
  if (wellKnownSymbol) {
    state.buf.push(wellKnownSymbol);
    return true;
  }

  const key = Symbol.keyFor(val);
  if (key !== undefined) {
    state.buf.push("Symbol.for(" + quote(key, 0) + ")");
    return true;
  }

  return writeReferenceOr(state, writeUnknownSymbol, val, parent, accessor);
}

function writeUnknownSymbol(state: State) {
  state.buf.push("Symbol()");
  return true;
}

function writeNever(state: State, val: unknown, ref: Reference) {
  MARKO_DEBUG && throwUnserializable(state, val, ref);
  return false;
}

function writeNull(state: State) {
  state.buf.push("null");
  return true;
}

function writeObject(
  state: State,
  val: object | null,
  parent: Reference | null,
  accessor: string,
) {
  if (val === null) return writeNull(state);

  const wellKnownObject = KNOWN_OBJECTS.get(val);
  if (wellKnownObject) {
    state.buf.push(wellKnownObject);
    return true;
  }

  return writeReferenceOr(state, writeUnknownObject, val, parent, accessor);
}

function writeUnknownObject(state: State, val: object, ref: Reference) {
  switch (val.constructor) {
    case undefined:
      return writeNullObject(state, val, ref);
    case Object:
      return writePlainObject(state, val, ref);
    case Array:
      return writeArray(state, val as unknown[], ref);
    case Date:
      return writeDate(state, val as Date);
    case RegExp:
      return writeRegExp(state, val as RegExp);
    case Promise:
      return writePromise(state, val as Promise<unknown>, ref);
    case Map:
      return writeMap(state, val as Map<unknown, unknown>, ref);
    case Set:
      return writeSet(state, val as Set<unknown>, ref);
    case Generator:
      return writeGenerator(state, val as Generator, ref);
    case AsyncGenerator:
      return writeAsyncGenerator(state, val as AsyncGenerator, ref);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return writeError(state, val as Error, ref);
    case AggregateError:
      return writeAggregateError(state, val as AggregateError, ref);
    case ArrayBuffer:
      return writeArrayBuffer(state, val as ArrayBuffer);
    case Int8Array:
    case Uint8Array:
    case Uint8ClampedArray:
    case Int16Array:
    case Uint16Array:
    case Int32Array:
    case Uint32Array:
    case Float32Array:
    case Float64Array:
      return writeTypedArray(state, val as TypedArray, ref);
    case WeakSet:
      return writeWeakSet(state);
    case WeakMap:
      return writeWeakMap(state);
    // The following references use `globalThis`
    // since they are not implemented by all runtimes.
    case globalThis.URL:
      return writeURL(state, val as URL);
    case globalThis.URLSearchParams:
      return writeURLSearchParams(state, val as URLSearchParams);
    case globalThis.Headers:
      return writeHeaders(state, val as Headers);
    case globalThis.FormData:
      return writeFormData(state, val as FormData);
    case globalThis.ReadableStream:
      return writeReadableStream(state, val as ReadableStream<unknown>, ref);
    case globalThis.Request:
      return writeRequest(state, val as Request, ref);
    case globalThis.Response:
      return writeResponse(state, val as Response, ref);
  }

  MARKO_DEBUG && throwUnserializable(state, val, ref);
  return false;
}

function writePlainObject(state: State, val: object, ref: Reference) {
  state.buf.push("{");
  writeObjectProps(state, val, ref);
  state.buf.push("}");
  return true;
}

function writeArray(state: State, val: unknown[], ref: Reference) {
  let sep = "[";

  for (let i = 0; i < val.length; i++) {
    const item = val[i];
    state.buf.push(sep);
    sep = ",";

    if (item === undefined) {
      state.wroteUndefined = true;
      state.buf.push("$");
    } else {
      writeProp(state, item, ref, "" + i);
    }
  }

  if (sep === "[") {
    state.buf.push("[]");
  } else {
    state.buf.push("]");
  }
  return true;
}

function writeDate(state: State, val: Date) {
  // Epoch form is ~12 bytes smaller than an ISO string and also round
  // trips invalid dates (`toISOString` throws on them).
  state.buf.push("new Date(" + +val + ")");
  return true;
}

function writeRegExp(state: State, val: RegExp) {
  state.buf.push(val + "");
  return true;
}

function writePromise(state: State, val: Promise<unknown>, ref: Reference) {
  const { boundary, channel } = state;
  if (!boundary) return false;

  const pId = nextRefAccess(state);
  const handle = newAsyncHandle(state, ref, pId);
  state.buf.push(
    "(p=>p=new Promise((f,r)=>" + pId + "={f,r(e){p.catch(_=>0);r(e)}}))()",
  );
  val.then(
    (v) => writeAsyncCall(state, boundary, handle, "f", v, channel, pId),
    (v) => writeAsyncCall(state, boundary, handle, "r", v, channel, pId),
  );
  boundary.startAsync();
  return true;
}

function newAsyncHandle(state: State, parent: Reference, id: string) {
  const handle = {};
  const handleRef = new Reference(parent, null, state.flush, null, id);
  handleRef.channel = state.channel;
  state.refs.set(handle, handleRef);
  return handle;
}

function writeMap(state: State, val: Map<unknown, unknown>, ref: Reference) {
  if (!val.size) {
    state.buf.push("new Map");
    return true;
  }

  const items: unknown[] = [];
  let assigns: undefined | string[];
  let needsId: undefined | boolean;
  let i = 0;

  // Using the map constructor uses 2 bytes per entry (serialized as an array).
  // If we are below the number of bytes of the reduce runtime, we'll output a plain
  // constructor.
  if (val.size < 25) {
    for (let [itemKey, itemValue] of val) {
      if (itemKey === val) {
        itemKey = undefined;
        (assigns ||= []).push("a[" + i + "][0]");
      }

      if (itemValue === val) {
        itemValue = undefined;
        (assigns ||= []).push("a[" + i + "][1]");
      }

      needsId ||= isDedupedMember(itemKey) || isDedupedMember(itemValue);

      i = items.push(
        itemValue === undefined
          ? itemKey === undefined
            ? []
            : [itemKey]
          : [itemKey, itemValue],
      );
    }

    writeArrayArg(
      state,
      ref,
      items,
      assigns &&
        "((m,a)=>(" +
          assignsToString(assigns, "m") +
          ",a.forEach(i=>m.set(i[0],i[1])),m))(new Map,",
      "new Map(",
      needsId,
    );
  } else {
    for (let [itemKey, itemValue] of val) {
      if (itemKey === val) {
        itemKey = 0;
        (assigns ||= []).push("a[" + i + "]");
      }

      if (itemValue === val) {
        itemValue = 0;
        (assigns ||= []).push("a[" + (i + 1) + "]");
      }

      needsId ||= isDedupedMember(itemKey) || isDedupedMember(itemValue);

      i = items.push(itemKey, itemValue);
    }

    writeArrayArg(
      state,
      ref,
      items,
      assigns &&
        "(a=>a.reduce((m,v,i)=>i%2?m:m.set(v,a[i+1])," +
          assignsToString(assigns, "new Map") +
          "))(",
      "(a=>a.reduce((m,v,i)=>i%2?m:m.set(v,a[i+1]),new Map))(",
      needsId,
    );
  }

  return true;
}

function writeSet(state: State, val: Set<unknown>, ref: Reference) {
  if (!val.size) {
    state.buf.push("new Set");
    return true;
  }

  const items: (unknown | undefined)[] = [];
  let assigns: undefined | string[];
  let needsId: undefined | boolean;
  let i = 0;
  for (let item of val) {
    if (item === val) {
      item = 0;
      (assigns ||= []).push("i[" + i + "]");
    } else {
      needsId ||= isDedupedMember(item);
    }

    i = items.push(item);
  }

  writeArrayArg(
    state,
    ref,
    items,
    assigns &&
      "((s,i)=>(" +
        assignsToString(assigns, "s") +
        ",i.forEach(i=>s.add(i)),s))(new Set,",
    "new Set(",
    needsId,
  );
  return true;
}

// Writes the backing array argument for a Map/Set. The array has no
// accessor, so members that may be referenced again later must reach it
// through an eagerly claimed id binding (`needsId`, and always for the
// self-reference wrapper form) — while primitive/scope-only members never
// reference back through it and skip the binding entirely.
function writeArrayArg(
  state: State,
  ref: Reference,
  items: unknown[],
  assignsPrefix: string | undefined | false,
  plainPrefix: string,
  needsId?: boolean,
) {
  if (assignsPrefix || needsId) {
    const arrayRef = new Reference(
      ref,
      null,
      state.flush,
      null,
      nextRefAccess(state),
    );
    state.buf.push((assignsPrefix || plainPrefix) + arrayRef.id + "=");
    writeArray(state, items, arrayRef);
  } else {
    state.buf.push(plainPrefix);
    writeArray(
      state,
      items,
      new Reference(ref, null, state.flush, state.buf.length),
    );
  }
  state.buf.push(")");
}

// Direct Map/Set members that may be referenced again later bind through
// the backing array, so its id must be claimed eagerly; primitives and
// canonical scopes (self-resolving) never do.
function isDedupedMember(val: unknown) {
  switch (typeof val) {
    case "object":
      return val !== null && (val as ScopeInternals)[K_SCOPE_ID] === undefined;
    case "function":
    case "symbol":
      return true;
    case "string":
      return val.length > STRING_DEDUP_LENGTH;
    default:
      return false;
  }
}

function writeArrayBuffer(state: State, val: ArrayBuffer) {
  let result: string;

  if (val.byteLength) {
    const view = new Int8Array(val);
    result = hasOnlyZeros(view)
      ? "new ArrayBuffer(" + val.byteLength + ")"
      : "new Int8Array(" + typedArrayToInitString(view) + ").buffer";
  } else {
    result = "new ArrayBuffer";
  }

  state.buf.push(result);
  return true;
}

function writeTypedArray(state: State, val: TypedArray, ref: Reference) {
  if (val.byteOffset || state.refs.has(val.buffer)) {
    state.buf.push("new " + val.constructor.name + "(");
    writeProp(state, val.buffer, ref, "buffer");
    state.buf.push(val.byteOffset ? "," + val.byteOffset + ")" : ")");
  } else {
    state.refs.set(val.buffer, new Reference(ref, "buffer", state.flush, null));
    state.buf.push(
      "new " +
        val.constructor.name +
        (val.length === 0
          ? ""
          : "(" +
            (hasOnlyZeros(val) ? val.length : typedArrayToInitString(val)) +
            ")"),
    );
  }

  return true;
}

function writeWeakSet(state: State) {
  state.buf.push("new WeakSet");
  return true;
}

function writeWeakMap(state: State) {
  state.buf.push("new WeakMap");
  return true;
}

function writeError(state: State, val: Error, ref: Reference) {
  const result =
    "new " + val.constructor.name + "(" + quote(val.message + "", 0);
  if (val.cause) {
    state.buf.push(result + ",{cause:");
    writeProp(state, val.cause, ref, "cause");
    state.buf.push("})");
  } else {
    state.buf.push(result + ")");
  }
  return true;
}

function writeAggregateError(
  state: State,
  val: AggregateError,
  ref: Reference,
) {
  state.buf.push("new AggregateError(");
  writeProp(state, val.errors, ref, "errors");
  if (val.message) {
    state.buf.push("," + quote(val.message + "", 0) + ")");
  } else {
    state.buf.push(")");
  }
  return true;
}

function writeURL(state: State, val: URL) {
  state.buf.push("new URL(" + quote(val.toString(), 0) + ")");
  return true;
}

function writeURLSearchParams(state: State, val: URLSearchParams) {
  const str = val.toString();
  if (str) {
    state.buf.push("new URLSearchParams(" + quote(str, 0) + ")");
  } else {
    state.buf.push("new URLSearchParams");
  }

  return true;
}

function writeHeaders(state: State, val: Headers) {
  const headers = stringEntriesToProps(val as any);
  state.buf.push("new Headers" + (headers ? "({" + headers + "})" : ""));
  return true;
}

function writeFormData(state: State, val: FormData) {
  let sep = "[";
  let valStr: string = "";
  for (const [key, value] of val as unknown as Iterable<[string, string]>) {
    // TODO: support file/blob
    if (typeof value === "string") {
      valStr += sep + quote(key, 0) + "," + quote(value, 0);
      sep = ",";
    }
  }

  if (sep === "[") {
    state.buf.push("new FormData");
  } else {
    state.buf.push(
      valStr + "].reduce((f,v,i,a)=>i%2&&f.append(v,a[i+1])||f,new FormData)",
    );
  }

  return true;
}

function writeRequest(state: State, val: Request, ref: Reference) {
  let sep = "";
  const hasBody = val.body && !val.bodyUsed && (val as any).duplex === "half";
  state.buf.push("new Request(" + quote(val.url, 0));

  if (hasBody) {
    state.buf.push(",{body:");
    if (writeProp(state, val.body, ref, "body")) {
      state.buf.push(',duplex:"half"');
      sep = ",";
    } else {
      state.buf.pop();
    }
  }

  let options = "";
  if (val.cache !== "default") {
    options += sep + "cache:" + quote(val.cache, 0);
    sep = ",";
  }

  if (val.credentials !== "same-origin") {
    options += sep + "credentials:" + quote(val.credentials, 0);
    sep = ",";
  }

  const headers = stringEntriesToProps(val.headers as any);
  state.refs.set(val.headers, new Reference(ref, "headers", state.flush, null));
  if (headers) {
    options += sep + "headers:{" + headers + "}";
    sep = ",";
  }

  if (val.integrity) {
    options += sep + "integrity:" + quote(val.integrity, 0);
    sep = ",";
  }

  if (val.keepalive) {
    options += sep + "keepalive:true";
    sep = ",";
  }

  if (val.method !== "GET") {
    options += sep + "method:" + quote(val.method, 0);
    sep = ",";
  }

  if (val.mode !== "cors") {
    options += sep + "mode:" + quote(val.mode, 0);
    sep = ",";
  }

  if (val.redirect !== "follow") {
    options += sep + "redirect:" + quote(val.redirect, 0);
    sep = ",";
  }

  if (val.referrer !== "about:client") {
    options += sep + "referrer:" + quote(val.referrer, 0);
    sep = ",";
  }

  if (val.referrerPolicy) {
    options += sep + "referrerPolicy:" + quote(val.referrerPolicy, 0);
  }

  state.buf.push(
    hasBody ? options + "})" : options ? ",{" + options + "})" : ")",
  );

  return true;
}

function writeResponse(state: State, val: Response, ref: Reference) {
  let sep = "";
  let options = "";

  if (val.status !== 200) {
    options += "status:" + val.status;
    sep = ",";
  }

  if (val.statusText) {
    options += sep + "statusText:" + quote(val.statusText, 0);
    sep = ",";
  }

  const headers = stringEntriesToProps(val.headers as any);
  state.refs.set(val.headers, new Reference(ref, "headers", state.flush, null));
  if (headers) {
    options += sep + "headers:{" + headers + "}";
  }

  if (!val.body || val.bodyUsed) {
    state.buf.push(
      "new Response" + (options ? "(null,{" + options + "})" : ""),
    );
  } else {
    state.buf.push("new Response(");
    state.buf.push(
      (writeProp(state, val.body, ref, "body") ? "" : "null") +
        (options ? ",{" + options + "})" : ")"),
    );
  }

  return true;
}

function writeReadableStream(
  state: State,
  val: ReadableStream<unknown>,
  ref: Reference,
) {
  const { boundary, channel } = state;
  if (!boundary || val.locked) return false;

  const reader = val.getReader();
  const iterId = nextRefAccess(state);
  const handle = newAsyncHandle(state, ref, iterId);
  const onFulfilled = ({ value, done }: ReadableStreamReadResult<unknown>) => {
    if (done) {
      writeAsyncCall(state, boundary, handle, "r", value, channel);
    } else if (!boundary.signal.aborted) {
      reader.read().then(onFulfilled, onRejected);
      boundary.startAsync();
      writeAsyncCall(state, boundary, handle, "f", value, channel);
    }
  };
  const onRejected = (reason: unknown) => {
    writeAsyncCall(state, boundary, handle, "j", reason, channel);
  };

  state.buf.push(
    "new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(" +
      iterId +
      "={}).catch(e=>c.error(e))}})",
  );

  reader.read().then(onFulfilled, onRejected);
  boundary.startAsync();

  return true;
}

function writeGenerator(state: State, iter: Generator, ref: Reference) {
  if ((iter as any)[kTouchedIterator]) {
    state.buf.push("(async function*(){}())");
    return true;
  }

  let sep = "";
  state.buf.push("(function*(){");

  while (true) {
    const { value, done } = iter.next();
    if (done) {
      if (value !== undefined) {
        state.buf.push(sep + "return ");
        writeProp(state, value, ref, "");
      }
      break;
    }

    if (value === undefined) {
      state.buf.push(sep + "yield");
    } else {
      state.buf.push(sep + "yield ");
      writeProp(state, value, ref, "");
    }
    sep = ";";
  }

  state.buf.push("})()");
  return true;
}

function writeAsyncGenerator(
  state: State,
  iter: AsyncGenerator,
  ref: Reference,
) {
  if ((iter as any)[kTouchedIterator]) {
    state.buf.push("(async function*(){}())");
    return true;
  }

  const { boundary, channel } = state;
  if (!boundary) return false;

  const iterId = nextRefAccess(state);
  const handle = newAsyncHandle(state, ref, iterId);
  const onFulfilled = ({ value, done }: IteratorResult<unknown>) => {
    if (done) {
      writeAsyncCall(state, boundary, handle, "r", value, channel);
    } else if (!boundary.signal.aborted) {
      iter.next().then(onFulfilled, onRejected);
      boundary.startAsync();
      writeAsyncCall(state, boundary, handle, "f", value, channel);
    }
  };
  const onRejected = (reason: unknown) => {
    writeAsyncCall(state, boundary, handle, "j", reason, channel);
  };

  state.buf.push(
    "(async function*(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()])){for(i of a)v=await i,i!=l&&(yield v);return v})(" +
      iterId +
      "={})",
  );
  iter.next().then(onFulfilled, onRejected);
  boundary.startAsync();

  return true;
}

function writeNullObject(state: State, val: object, ref: Reference) {
  state.buf.push("{");
  state.buf.push(writeObjectProps(state, val, ref) + "__proto__:null}");
  return true;
}

function writeObjectProps(state: State, val: object, ref: Reference) {
  let sep = "";
  for (const key in val) {
    if (hasOwnProperty.call(val, key)) {
      const escapedKey = toObjectKey(key);
      state.buf.push(sep + escapedKey + ":");
      if (
        writeProp(
          state,
          (val as Record<PropertyKey, unknown>)[key],
          ref,
          escapedKey,
        )
      ) {
        sep = ",";
      } else {
        state.buf.pop();
      }
    }
  }

  if (hasSymbolIterator(val)) {
    // Attr tags (and other self first iterables) yield the object itself
    // first; `yield this` keeps that out of the iteration array so it does
    // not need a deferred circular assignment.
    let yieldSelf = "";
    const iterArr: unknown[] = [];
    for (const item of val) {
      if (item === val && !(yieldSelf || iterArr.length)) {
        yieldSelf = "yield this;";
      } else {
        iterArr.push(item);
      }
    }

    if (iterArr.length) {
      // Remaining items live in a bound array outside the generator body —
      // the body only evaluates when iterated, so members cannot be
      // written there without breaking reference dedup.
      const iterRef = new Reference(
        ref,
        null,
        state.flush,
        null,
        nextRefAccess(state),
      );
      state.buf.push(sep + "*[(" + iterRef.id + "=");
      writeArray(state, iterArr, iterRef);
      state.buf.push(
        ",Symbol.iterator)](){" + yieldSelf + "yield*" + iterRef.id + "}",
      );
    } else {
      state.buf.push(
        sep + "*[Symbol.iterator](){" + yieldSelf.slice(0, -1) + "}",
      );
    }

    sep = ",";
  }

  return sep;
}

function writeAsyncCall(
  state: State,
  boundary: Boundary,
  handle: WeakKey,
  method: string,
  value: unknown,
  channel: SerializeChannel | undefined,
  valueId: string | null = null,
) {
  if (boundary.signal.aborted) return;

  state.mutated.push({
    value,
    object: handle,
    property: method,
    channel,
    valueId,
  });
  boundary.endAsync();
}

function throwUnserializable(
  state: State,
  cause: unknown,
  ref: Reference | null = null,
  accessor: string = "",
) {
  if (cause !== undefined && state.boundary?.abort) {
    let message = "Unable to serialize";
    let access = "";
    while (ref?.accessor) {
      const debug = ref.parent?.debug;
      if (debug) {
        const varLoc = debug.vars?.[ref.accessor];
        let debugAccess = ref.accessor;
        let debugLoc = debug.loc;
        if (varLoc) {
          if (Array.isArray(varLoc)) {
            debugAccess = varLoc[0];
            if (varLoc[1]) debugLoc = varLoc[1];
          } else {
            debugLoc = varLoc;
          }
        }

        message += ` ${JSON.stringify(debugAccess)} in ${debug.file}`;
        if (debugLoc) message += `:${debugLoc}`;
        break;
      }
      access = toAccess(ref.accessor) + access;
      ref = ref.parent;
    }

    if (accessor) {
      access = toAccess(accessor) + access;
    }

    if (access[0] === ".") {
      access = access.slice(1);
    }

    if (access) {
      message += ` (reading ${access})`;
    }

    const err = new TypeError(message, { cause });
    err.stack = undefined;
    state.boundary.abort(err);
  }
}

function trackChannel(state: State, ref: Reference) {
  const refReadyId = ref.channel?.readyId;
  if (!refReadyId || refReadyId === state.channel?.readyId) return true;
  let cur = state.channel?.parent;
  while (cur) {
    if (cur.readyId === refReadyId) {
      (state.channelDeps ||= new Set()).add(refReadyId);
      return true;
    }
    cur = cur.parent;
  }
  return false;
}

function abortUnreachableChannel(state: State, val: unknown) {
  if (state.boundary?.abort) {
    const err = new TypeError(
      "Unable to serialize a value shared between independently lazy loaded content. Values shared this way must also be serialized by content that is not lazily loaded, or by a common parent.",
      { cause: val },
    );
    err.stack = undefined;
    state.boundary.abort(err);
  }
}

function isCircular(
  parent: Reference | null,
  ref: Reference,
): parent is Reference {
  let cur: Reference | null = parent;
  while (cur) {
    if (cur === ref) return true;
    cur = cur.parent;
  }

  return false;
}

export function toObjectKey(name: string) {
  if (name === "") {
    return '""';
  }

  const startChar = name[0];
  if (isDigit(startChar)) {
    if (startChar === "0") {
      if (name !== "0") {
        return quote(name, 1);
      }
    } else {
      for (let i = 1; i < name.length; i++) {
        if (!isDigit(name[i])) {
          return quote(name, i);
        }
      }
    }
  } else if (isWord(startChar)) {
    for (let i = 1; i < name.length; i++) {
      if (!isWordOrDigit(name[i])) {
        return quote(name, i);
      }
    }
  } else {
    return quote(name, 0);
  }

  return name;
}

export function toAccess(accessor: string) {
  const start = accessor[0];
  return start === '"' || (start >= "0" && start <= "9")
    ? "[" + accessor + "]"
    : "." + accessor;
}

// Creates a JavaScript double quoted string and escapes all characters not listed as DoubleStringCharacters on
// Also includes "<" to escape "</script>" and "\" to avoid invalid escapes in the output.
// http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
export function quote(str: string, startPos: number): string {
  let result = "";
  let lastPos = 0;

  for (let i = startPos; i < str.length; i++) {
    let replacement: string;
    switch (str[i]) {
      case '"':
        replacement = '\\"';
        break;
      case "\\":
        replacement = "\\\\";
        break;
      case "<":
        replacement = "\\x3C";
        break;
      case "\n":
        replacement = "\\n";
        break;
      case "\r":
        replacement = "\\r";
        break;
      case "\u2028":
        replacement = "\\u2028";
        break;
      case "\u2029":
        replacement = "\\u2029";
        break;
      default:
        continue;
    }

    result += str.slice(lastPos, i) + replacement;
    lastPos = i + 1;
  }

  return '"' + (lastPos === startPos ? str : result + str.slice(lastPos)) + '"';
}

function ensureId(state: State, ref: Reference) {
  if (ref.scopeId !== undefined) {
    trackChannel(state, ref);
    return "_(" + ref.scopeId + ")";
  }

  if (ref.id) {
    trackChannel(state, ref);
    return ref.id;
  }

  return assignId(state, ref);
}

function accessId(state: State, ref: Reference) {
  const id = ensureId(state, ref);
  return id === ref.id || ref.scopeId !== undefined ? id : "(" + id + ")";
}

function assignId(state: State, ref: Reference) {
  const { pos } = ref;
  ref.id = nextRefAccess(state);

  if (pos !== null && ref.flush === state.flush) {
    if (pos === 0) {
      state.buf[0] = ref.id + "=" + state.buf[0];
    } else {
      state.buf[pos - 1] += ref.id + "=";
    }

    return ref.id;
  }

  ref.channel = state.channel;

  let cur = ref;
  let accessPrevValue = "";

  do {
    accessPrevValue = toAccess(cur.accessor!) + accessPrevValue;
    const parent = cur.parent!;

    if (parent.id) {
      if (trackChannel(state, parent) || !parent.parent) {
        accessPrevValue = parent.id + accessPrevValue;
        break;
      }
    }

    if (parent.flush === state.flush || parent.scopeId !== undefined) {
      accessPrevValue = accessId(state, parent) + accessPrevValue;
      break;
    }

    cur = parent;
  } while (cur);

  return ref.id + "=" + accessPrevValue;
}

function assignsToString(assigns: string[], value: string) {
  if (assigns.length > 100) {
    return "($=>(" + assigns.join("=$,") + "=$))(" + value + ")";
  }

  return assigns.join("=") + "=" + value;
}

function addAssignment(ref: Reference, assign: string) {
  if (ref.assigns) {
    ref.assigns.push(assign);
  } else {
    ref.assigns = [assign];
  }
}

function nextRefAccess(state: State) {
  return "_." + nextId(state);
}

function nextId(state: State) {
  const c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
  let n = state.ids++;
  let r = c[n % 53]; // Avoids chars that cannot start a property name and _ (reserved).
  for (n = (n / 53) | 0; n; n >>>= 6) {
    r += c[n & 63];
  }

  return r;
}

function hasSymbolIterator(
  value: unknown,
): value is { [Symbol.iterator](): IterableIterator<unknown> } {
  return Symbol.iterator in (value as any);
}

function stringEntriesToProps(entries: Iterable<[string, string]>) {
  let result = "";
  let sep = "";
  for (const [key, value] of entries) {
    result += sep + toObjectKey(key) + ":" + quote(value, 0);
    sep = ",";
  }

  return result;
}

function typedArrayToInitString(view: TypedArray) {
  let result = "[";
  let sep = "";
  for (let i = 0; i < view.length; i++) {
    result += sep + view[i];
    sep = ",";
  }

  result += "]";
  return result;
}

function hasOnlyZeros(typedArray: TypedArray) {
  for (let i = 0; i < typedArray.length; i++) {
    if (typedArray[i] !== 0) return false;
  }

  return true;
}

function isWordOrDigit(char: string) {
  return isWord(char) || isDigit(char);
}

function isDigit(char: string) {
  return char >= "0" && char <= "9";
}

function isWord(char: string) {
  return (
    (char >= "a" && char <= "z") ||
    (char >= "A" && char <= "Z") ||
    char === "_" ||
    char === "$"
  );
}

function patchIteratorNext(proto: Iterator<any>) {
  if ((proto.next as any)[kTouchedIterator]) return;
  const { next } = proto;
  proto.next = function (value) {
    (this as any)[kTouchedIterator] = 1;
    return next.call(this, value);
  };
  (proto.next as any)[kTouchedIterator] = true;
}
