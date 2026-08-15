import { BIND_FRAME_VAR } from "../common/meta";
import * as Char from "./constants/char";
import type { Boundary } from "./writer";

export const K_SCOPE_ID = Symbol("Scope ID");
const kTouchedIterator = Symbol.for("marko.touchedIterator");
const { hasOwnProperty } = {};
const objectProto = Object.prototype;
const arrayProto = Array.prototype;
const Generator = (function* () {})().constructor;
const AsyncGenerator = (async function* () {})().constructor;
// `Intl.DurationFormat` is newer than the TypeScript lib types.
type IntlWithDurationFormat = { DurationFormat?: new () => object } | undefined;
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
  | Float64Array
  | BigInt64Array
  | BigUint64Array;

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
  flushId = 0;
  wroteUndefined = false;
  buf = [] as string[];
  strs = new Map<string, Reference>();
  refs = new WeakMap<WeakKey, Reference>();
  pendingAssignments = new Set<Reference>();
  boundary: Boundary | undefined = undefined;
  channel: SerializeChannel | undefined = undefined;
  channelDeps: Set<string> | null = null;
  mutated: Mutation[] = [];
}

// A `Map`/`Set` member that references an ancestor cannot be built into the
// constructor (the ancestor's id isn't assigned yet), so it rides the
// collection's reference in `pendingAssignments` and emits a post-construction call
// (`.add(v)` / `.set(k, v)`) once every id exists.
interface DeferredCall {
  method: string;
  args: unknown[];
}

class Reference {
  declare debug?: Debug;
  public assignments: null | string[] = null;
  public calls: null | DeferredCall[] = null;
  public scopeId: number | undefined = undefined;
  public channel: SerializeChannel | undefined = undefined;
  public parent: Reference | null;
  public accessor: string | null;
  public flushId: number;
  public pos: number | null;
  public id: string | null;
  constructor(
    parent: Reference | null,
    accessor: string | null,
    flushId: number,
    pos: number | null = null,
    id: string | null = null,
  ) {
    this.parent = parent;
    this.accessor = accessor;
    this.flushId = flushId;
    this.pos = pos;
    this.id = id;
  }
}

interface Debug {
  file: string;
  loc: string | 0;
  vars: Record<string, string | [name: string, loc?: string]> | undefined;
  slots?: Record<string, string>;
}
const DEBUG = new WeakMap<WeakKey, Debug>();
export function setDebugInfo(
  obj: WeakKey,
  file: string,
  loc: string | 0,
  vars?: Debug["vars"],
) {
  DEBUG.set(obj, { file, loc, vars, slots: DEBUG.get(obj)?.slots });
}

// Names an internal slot with the property the runtime actually read (eg the
// `valueChange` a spread supplied); the translator only knows the spread.
export function setDebugSlotName(obj: WeakKey, accessor: string, name: string) {
  const debug = DEBUG.get(obj);
  if (debug) {
    (debug.slots ??= {})[accessor] = name;
  } else {
    DEBUG.set(obj, {
      file: "",
      loc: 0,
      vars: undefined,
      slots: { [accessor]: name },
    });
  }
}

export class Serializer {
  #state = new State();
  pending(channel?: SerializeChannel) {
    return hasMatchingMutations(this.#state.mutated, channel?.readyId);
  }
  // Returns the first pending ready channel for fixed-point draining.
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
      this.#state.flushId++;
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

// A value whose serialized form is a fixed expression (an in-band
// record): unbound, so every occurrence emits the access text itself.
export function registerAccess<T extends WeakKey>(val: T, access: string) {
  REGISTRY.set(val, { id: "", scope: undefined, access });
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
// assignments/mutations, which may reference bindings created inside the fill
// and so must evaluate after it) the fill is applied through the serialize
// context instead and the payload ends in `,0` so an arbitrary value from
// its last expression can never be misread as a fill — the browser only
// applies a payload's return value when it is an array.
function writeScopesRoot(state: State, flushes: ScopeFlush[]) {
  const { buf } = state;
  // A patch frame is one flat entry array (the line owns its brackets), so
  // the scope run serializes with no fn wrapper or list brackets; an
  // assigned-reference flush wraps itself as a `(_([...]),...,0)` entry.
  const bare = state.boundary?.state?.writesPatches;
  let nextSlotId = -1;
  let fillIndex = -1;

  for (const flush of flushes) {
    const scopeId = flush[0];
    const scope = flush[1];
    const ref =
      state.refs.get(scope) || newScopeReference(state, scope, scopeId);

    // Empty scopes fold into the next emitted slot's skip count.
    const openIndex = buf.push("") - 1;
    if (writeObjectProps(state, flush[2], ref)) {
      // The skip is a SIGNED delta, so a flush that revisits a lower slot
      // steps the cursor back rather than landing in the wrong one. A bare
      // patch run has no cursor at all: its single flush is the page root.
      buf[openIndex] =
        nextSlotId === -1
          ? bare
            ? "{"
            : scopeId + ",{"
          : (scopeId !== nextSlotId ? "," + (scopeId - nextSlotId) : "") + ",{";
      if (fillIndex === -1) fillIndex = openIndex;
      nextSlotId = scopeId + 1;
      buf.push("}");
    } else {
      buf.pop();
    }
  }

  let extras = "";
  if (state.pendingAssignments.size || hasChannelMutations(state)) {
    extras = ",0)";
    // A deferred bare run applies through `_()` mid-expression, so a patch
    // frame must evaluate its shell records first (see `resumeScript`).
    if (bare) state.boundary!.state.patchDeferred = 1;
    if (fillIndex !== -1) {
      buf[fillIndex] = "_([" + buf[fillIndex];
      buf.push("])");
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

  const arrow = state.wroteUndefined ? "(_,$)=>" : "_=>";
  state.wroteUndefined = false;
  return bare ? result : extras ? arrow + result : arrow + "[" + result + "]";
}

function writeAssigned(state: State) {
  let sep = state.buf.length ? "," : "";

  if (state.pendingAssignments.size) {
    const pending = state.pendingAssignments;
    state.pendingAssignments = new Set();
    let buf = "";
    let hasCalls = false;
    for (const ref of pending) {
      if (ref.assignments) {
        buf += sep + assignmentsToString(ref.assignments, ref.id!);
        ref.assignments = null;
        sep = ",";
      }
      hasCalls ||= ref.calls !== null;
    }
    if (buf) state.buf.push(buf);

    // Batched assignments land in one entry above, so calls — which push
    // their args directly — walk the same set afterwards.
    if (hasCalls) {
      for (const ref of pending) {
        if (!ref.calls) continue;
        for (const { method, args } of ref.calls) {
          state.buf.push(
            (state.buf.length ? "," : "") + ref.id + "." + method + "(",
          );
          for (let a = 0; a < args.length; a++) {
            if (a) state.buf.push(",");
            writeCallArg(state, args[a]);
          }
          state.buf.push(")");
        }
        ref.calls = null;
      }
    }
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
        // Reused mutation values require eager bindings because they lack an
        // accessor path.
        const valueRef =
          typeof mutation.value === "string"
            ? state.strs.get(mutation.value)
            : state.refs.get(mutation.value as object);
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
  }

  // Serializing call args or channel-mutation values can surface fresh
  // circular assignments/calls; drain them into this same payload.
  if (state.pendingAssignments.size) {
    writeAssigned(state);
  }
}

function writeCallArg(state: State, val: unknown) {
  if (val === undefined) {
    state.wroteUndefined = true;
    state.buf.push("$");
  } else if (writeProp(state, val, null, "")) {
    // Args have no parent access path, so a later reuse needs an eager id.
    const ref = state.refs.get(val as WeakKey) || state.strs.get(val as string);
    if (ref && ref.id === null) assignId(state, ref);
  } else {
    state.buf.push("void 0");
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
  // Scopes are handled in `writeObject`; functions/symbols never are.
  let ref = state.refs.get(val);
  if (ref) {
    if (!trackChannel(state, ref)) {
      if (MARKO_DEBUG) abortUnreachableChannel(state, val);
      return false;
    }

    if (parent && isCircular(parent, ref)) {
      ensureId(state, ref);
      state.pendingAssignments.add(ref);
      addAssignment(ref, accessId(state, parent) + toAccess(accessor));
      return false;
    }

    state.buf.push(ensureId(state, ref));
    return true;
  }

  const registered = REGISTRY.get(val);
  if (registered)
    return writeRegistered(state, val, parent, accessor, registered);

  state.refs.set(
    val,
    (ref = new Reference(parent, accessor, state.flushId, state.buf.length)),
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
  const ref = new Reference(null, null, state.flushId);
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
  // Patch-render scope ids have no client-side map, so a bound
  // registration references the bind recorded at render time instead.
  if (scope && state.boundary?.state?.writesPatches) {
    const n = (
      state.boundary.state as { binds?: Map<WeakKey, number> }
    ).binds?.get(val);
    // Bind `0` is never written, so a registration the render-time scan
    // could not reach rejects at the frame's commit check (navigation).
    state.buf.push(BIND_FRAME_VAR + "(" + (n || 0) + ")");
  } else if (scope) {
    // Registered factories read their self-resolving scope only when invoked.
    const ref = new Reference(
      parent,
      accessor,
      state.flushId,
      state.buf.length,
    );
    ref.channel = state.channel;
    state.refs.set(val, ref);
    if (MARKO_DEBUG) {
      ref.debug = DEBUG.get(val);
    }

    // The serialize context resolves both registry id and render-local scope.
    const scopeId = (scope as ScopeInternals)[K_SCOPE_ID]!;
    trackScope(state, scope, scopeId);
    state.buf.push("_(" + scopeId + "," + quote(registered.id, 0) + ")");
  } else {
    state.buf.push(registered.access);
  }
  return true;
}

// Long strings gain a binding only when repeated.
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
        state.flushId,
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
  // `-0` deliberately serializes as "0" and resumes as +0; not worth a hot-path
  // check for a value that never originates from Marko-generated code.
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

// Unserializable values are diagnosed only under `MARKO_DEBUG`, which alone has
// the metadata to name them; production omits the property rather than throwing.
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

  // Resolve scopes before the globals lookup (a scope is never a global).
  const scopeId = (val as ScopeInternals)[K_SCOPE_ID];
  if (scopeId !== undefined) {
    trackScope(state, val, scopeId);
    state.buf.push("_(" + scopeId + ")");
    return true;
  }

  const wellKnownObject = KNOWN_OBJECTS.get(val);
  if (wellKnownObject) {
    state.buf.push(wellKnownObject);
    return true;
  }

  return writeReferenceOr(state, writeUnknownObject, val, parent, accessor);
}

function writeUnknownObject(state: State, val: object, ref: Reference) {
  // Fast-path the common shapes by prototype identity before the
  // `.constructor` read + switch; exotic prototypes fall through.
  const proto = Object.getPrototypeOf(val);
  if (proto === objectProto) return writePlainObject(state, val, ref);
  if (proto === arrayProto) return writeArray(state, val as unknown[], ref);

  // The constructor is read from the prototype so an own `constructor`
  // property (e.g. parsed JSON data) cannot change how a value is written.
  switch (proto?.constructor) {
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
    case BigInt64Array:
    case BigUint64Array:
      return writeTypedArray(state, val as TypedArray, ref);
    case DataView:
      return writeDataView(state, val as DataView, ref);
    // Boxed primitives (`Object(1)`) are deliberately unsupported (wont-fix:
    // an antipattern with no template use case; write the primitive instead).
    // `DOMException`/`AbortSignal`/`Event` too (wont-fix: no credible resume
    // use case, and a pending `AbortSignal` has no faithful representation).
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
      return writeFormData(state, val as FormData, ref);
    case globalThis.ReadableStream:
      return writeReadableStream(state, val as ReadableStream<unknown>, ref);
    case globalThis.Request:
      return writeRequest(state, val as Request, ref);
    case globalThis.Response:
      return writeResponse(state, val as Response, ref);
    // Each name is a literal: re-reading it off the prototype would let an
    // exotic `constructor` inject arbitrary source into the payload.
    case globalThis.Intl?.NumberFormat:
      return writeIntl(state, val, "NumberFormat", ref);
    case globalThis.Intl?.DateTimeFormat:
      return writeIntl(state, val, "DateTimeFormat", ref);
    case globalThis.Intl?.Collator:
      return writeIntl(state, val, "Collator", ref);
    case globalThis.Intl?.PluralRules:
      return writeIntl(state, val, "PluralRules", ref);
    case globalThis.Intl?.RelativeTimeFormat:
      return writeIntl(state, val, "RelativeTimeFormat", ref);
    case globalThis.Intl?.ListFormat:
      return writeIntl(state, val, "ListFormat", ref);
    case globalThis.Intl?.DisplayNames:
      return writeIntl(state, val, "DisplayNames", ref);
    case globalThis.Intl?.Segmenter:
      return writeIntl(state, val, "Segmenter", ref);
    case (globalThis.Intl as IntlWithDurationFormat)?.DurationFormat:
      return writeIntl(state, val, "DurationFormat", ref);
    case globalThis.Intl?.Locale:
      return writeIntlLocale(state, val as Intl.Locale);
    case globalThis.Temporal?.Instant:
      return writeTemporal(state, val, "Instant");
    case globalThis.Temporal?.Duration:
      return writeTemporal(state, val, "Duration");
    case globalThis.Temporal?.PlainDate:
      return writeTemporal(state, val, "PlainDate");
    case globalThis.Temporal?.PlainDateTime:
      return writeTemporal(state, val, "PlainDateTime");
    case globalThis.Temporal?.PlainMonthDay:
      return writeTemporal(state, val, "PlainMonthDay");
    case globalThis.Temporal?.PlainTime:
      return writeTemporal(state, val, "PlainTime");
    case globalThis.Temporal?.PlainYearMonth:
      return writeTemporal(state, val, "PlainYearMonth");
    case globalThis.Temporal?.ZonedDateTime:
      return writeTemporal(state, val, "ZonedDateTime");
  }

  MARKO_DEBUG && throwUnserializable(state, val, ref);
  return false;
}

function writePlainObject(state: State, val: object, ref: Reference) {
  state.buf.push("{");
  writeMaybeIterableProps(state, val, ref);
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

const unsafeRegExpSourceReg = /\\[\s\S]|[<\0\ud800-\udfff]/gu;
const unsafeRegExpSourceDetect = /[<\0\ud800-\udfff]/u;
const replaceUnsafeRegExpSourceChar = (match: string) => {
  // `match` is a raw unsafe char, or a backslash escape whose escapee is last
  // (a paired-surrogate escapee is length 3 and left untouched).
  const ch = match.length === 3 ? "" : match[match.length - 1];
  if (ch === "<") return "\\x3C";
  if (ch === "\0") return "\\x00";
  const code = ch.charCodeAt(0);
  return code >= 0xd800 && code <= 0xdfff
    ? "\\u" + code.toString(16).padStart(4, "0")
    : match;
};
function writeRegExp(state: State, val: RegExp) {
  // source/flags are read off the instance intentionally: an own-property shadow
  // only arises from a deliberate server-side defineProperty, not worth guarding.
  const { source } = val;
  state.buf.push(
    "/" +
      (unsafeRegExpSourceDetect.test(source)
        ? source.replace(unsafeRegExpSourceReg, replaceUnsafeRegExpSourceChar)
        : source) +
      "/" +
      val.flags,
  );
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
  const handleRef = new Reference(parent, null, state.flushId, null, id);
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
  let assignments: undefined | string[];
  let needsId: undefined | boolean;
  // Once an entry must defer, every later entry defers too so insertion order
  // is preserved.
  let deferring = false;
  let i = 0;

  // Small maps cost less as constructor entries than with the reduce runtime.
  if (val.size < 25) {
    for (let [itemKey, itemValue] of val) {
      if (
        !deferring &&
        ((itemKey !== val && isAncestorMember(state, ref, itemKey)) ||
          (itemValue !== val && isAncestorMember(state, ref, itemValue)))
      ) {
        deferring = true;
      }
      if (deferring) {
        deferCall(state, ref, "set", [itemKey, itemValue]);
        continue;
      }

      if (itemKey === val) {
        itemKey = undefined;
        (assignments ||= []).push("a[" + i + "][0]");
      }

      if (itemValue === val) {
        itemValue = undefined;
        (assignments ||= []).push("a[" + i + "][1]");
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
      assignments &&
        "((m,a)=>(" +
          assignmentsToString(assignments, "m") +
          ",a.forEach(i=>m.set(i[0],i[1])),m))(new Map,",
      "new Map(",
      needsId,
    );
  } else {
    for (let [itemKey, itemValue] of val) {
      if (
        !deferring &&
        ((itemKey !== val && isAncestorMember(state, ref, itemKey)) ||
          (itemValue !== val && isAncestorMember(state, ref, itemValue)))
      ) {
        deferring = true;
      }
      if (deferring) {
        deferCall(state, ref, "set", [itemKey, itemValue]);
        continue;
      }

      if (itemKey === val) {
        itemKey = 0;
        (assignments ||= []).push("a[" + i + "]");
      }

      if (itemValue === val) {
        itemValue = 0;
        (assignments ||= []).push("a[" + (i + 1) + "]");
      }

      needsId ||= isDedupedMember(itemKey) || isDedupedMember(itemValue);

      i = items.push(itemKey, itemValue);
    }

    writeArrayArg(
      state,
      ref,
      items,
      assignments &&
        "(a=>a.reduce((m,v,i)=>i%2?m:m.set(v,a[i+1])," +
          assignmentsToString(assignments, "new Map") +
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
  let assignments: undefined | string[];
  let needsId: undefined | boolean;
  let deferring = false;
  let i = 0;
  for (let item of val) {
    // Once a member must defer, every later member defers too so insertion
    // order is preserved.
    if (!deferring && item !== val && isAncestorMember(state, ref, item)) {
      deferring = true;
    }
    if (deferring) {
      deferCall(state, ref, "add", [item]);
      continue;
    }

    if (item === val) {
      item = 0;
      (assignments ||= []).push("i[" + i + "]");
    } else {
      needsId ||= isDedupedMember(item);
    }

    i = items.push(item);
  }

  writeArrayArg(
    state,
    ref,
    items,
    assignments &&
      "((s,i)=>(" +
        assignmentsToString(assignments, "s") +
        ",i.forEach(i=>s.add(i)),s))(new Set,",
    "new Set(",
    needsId,
  );
  return true;
}

// A member that is `===` an ancestor already on the write stack; its reference
// exists and sits on the container's parent chain. Primitives never qualify, so
// they skip the lookup entirely.
function isAncestorMember(state: State, container: Reference, member: unknown) {
  if (
    member === null ||
    (typeof member !== "object" && typeof member !== "function")
  ) {
    return false;
  }
  const ref = state.refs.get(member as WeakKey);
  return ref !== undefined && isCircular(container, ref);
}

function deferCall(
  state: State,
  ref: Reference,
  method: string,
  args: unknown[],
) {
  ensureId(state, ref);
  (ref.calls ||= []).push({ method, args });
  state.pendingAssignments.add(ref);
}

// Reusable Map/Set members bind through their otherwise unreachable backing
// array.
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
      state.flushId,
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
      new Reference(ref, null, state.flushId, state.buf.length),
    );
  }
  state.buf.push(")");
}

// Only a reusable non-scope member makes its container need an id.
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

// A view whose buffer the dispatch cannot write (e.g. `SharedArrayBuffer`)
// would leave a hole in the constructor call and break the whole payload.
function canWriteBuffer(state: State, buffer: ArrayBufferLike, ref: Reference) {
  if (Object.getPrototypeOf(buffer)?.constructor === ArrayBuffer) return true;
  MARKO_DEBUG && throwUnserializable(state, buffer, ref, "buffer");
  return false;
}

function writeDataView(state: State, val: DataView, ref: Reference) {
  const { buffer } = val;
  if (!canWriteBuffer(state, buffer, ref)) return false;

  // The buffer writes through so sibling views over it share one binding.
  const needsLength = val.byteOffset + val.byteLength < buffer.byteLength;
  state.buf.push("new DataView(");
  writeProp(state, buffer, ref, "buffer");
  state.buf.push(
    (val.byteOffset || needsLength
      ? "," + val.byteOffset + (needsLength ? "," + val.byteLength : "")
      : "") + ")",
  );
  return true;
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
  // `constructor.name` is read off the instance (not the matched prototype):
  // only a deliberately corrupted typed array differs, never parsed data.

  // Partial views serialize their full shared buffer for later sibling views.
  if (
    val.byteOffset ||
    val.byteLength < val.buffer.byteLength ||
    state.refs.has(val.buffer)
  ) {
    if (!canWriteBuffer(state, val.buffer, ref)) return false;
    const needsLength = val.byteOffset + val.byteLength < val.buffer.byteLength;
    state.buf.push("new " + val.constructor.name + "(");
    writeProp(state, val.buffer, ref, "buffer");
    state.buf.push(
      (val.byteOffset || needsLength
        ? "," + val.byteOffset + (needsLength ? "," + val.length : "")
        : "") + ")",
    );
  } else {
    state.refs.set(
      val.buffer,
      new Reference(ref, "buffer", state.flushId, null),
    );
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

// The own `constructor` is trusted here: dispatch already matched a built-in
// error prototype, so only this object's owner could have replaced it.
// Errors round-trip only `message` and `cause` (plus `AggregateError.errors`);
// own enumerable props hung on an error are deliberately not serialized.
function writeError(state: State, val: Error, ref: Reference) {
  const result =
    "new " + val.constructor.name + "(" + quote(val.message + "", 0);
  if (val.cause !== undefined) {
    const pos = state.buf.push(result + ",{cause:") - 1;
    if (writeProp(state, val.cause, ref, "cause")) {
      state.buf.push("})");
    } else {
      // A circular cause is applied through its deferred assignment instead;
      // slicing preserves any id assignment prefixed onto the chunk.
      state.buf[pos] = state.buf[pos].slice(0, -",{cause:".length) + ")";
    }
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
  const inlined = writeProp(state, val.errors, ref, "errors");
  if (!inlined) {
    // Circular errors are applied through their deferred assignment instead.
    state.buf.push("[]");
  }
  if (val.message) {
    state.buf.push("," + quote(val.message + "", 0) + ")");
  } else {
    state.buf.push(")");
  }
  if (inlined) {
    // `new AggregateError(arr)` copies arr into a fresh writable `errors` slot,
    // so relink a shared/fill-deferred array through it to keep identity and fills.
    const errorsRef = state.refs.get(val.errors as object);
    if (errorsRef?.id) {
      state.pendingAssignments.add(errorsRef);
      addAssignment(errorsRef, accessId(state, ref) + toAccess("errors"));
    }
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
  const headers = stringEntriesToHeadersInit(val as any);
  state.buf.push("new Headers" + (headers ? "(" + headers + ")" : ""));
  return true;
}

function writeFormData(state: State, val: FormData, ref: Reference) {
  let sep = "[";
  let valStr: string = "";
  for (const [key, value] of val as unknown as Iterable<[string, unknown]>) {
    if (typeof value !== "string") {
      // `File`/`Blob` entries aren't serializable yet; fail like any other
      // unsupported value rather than silently dropping the entry.
      MARKO_DEBUG && throwUnserializable(state, value, ref, key);
      return false;
    }

    valStr += sep + quote(key, 0) + "," + quote(value, 0);
    sep = ",";
  }

  if (sep === "[") {
    state.buf.push("new FormData");
  } else {
    state.buf.push(
      valStr + "].reduce((f,v,i,a)=>i%2&&f.append(a[i-1],v)||f,new FormData)",
    );
  }

  return true;
}

function writeRequest(state: State, val: Request, ref: Reference) {
  let sep = "";
  let bodySerialized = false;
  const hasBody = val.body && !val.bodyUsed && (val as any).duplex === "half";
  state.buf.push("new Request(" + quote(val.url, 0));

  if (hasBody) {
    state.buf.push(",{body:");
    if (writeProp(state, val.body, ref, "body")) {
      state.buf.push(',duplex:"half"');
      sep = ",";
      bodySerialized = true;
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

  const seenHeaders = state.refs.get(val.headers);
  if (seenHeaders) {
    // Dedup against the already-serialized Headers instead of re-emitting the
    // entries inline (which also clobbered its reference).
    options += sep + "headers:" + ensureId(state, seenHeaders);
    sep = ",";
  } else {
    state.refs.set(
      val.headers,
      new Reference(ref, "headers", state.flushId, null),
    );
    const headers = stringEntriesToHeadersInit(val.headers as any);
    if (headers) {
      options += sep + "headers:" + headers;
      sep = ",";
    }
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
    bodySerialized ? options + "})" : options ? ",{" + options + "})" : ")",
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

  const seenHeaders = state.refs.get(val.headers);
  if (seenHeaders) {
    // Dedup against the already-serialized Headers instead of re-emitting the
    // entries inline (which also clobbered its reference).
    options += sep + "headers:" + ensureId(state, seenHeaders);
  } else {
    state.refs.set(
      val.headers,
      new Reference(ref, "headers", state.flushId, null),
    );
    const headers = stringEntriesToHeadersInit(val.headers as any);
    if (headers) {
      options += sep + "headers:" + headers;
    }
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

// Rebuilt from `resolvedOptions()`, with `locale` passed as the first argument
// instead. Exact except `DateTimeFormat` widths in some locales (`ja`, `zh`).
function writeIntl(state: State, val: object, name: string, ref: Reference) {
  const { locale, ...options } = (val as Intl.NumberFormat).resolvedOptions();
  let needsId = false;
  for (const key in options) {
    if (isDedupedMember((options as Record<string, unknown>)[key])) {
      needsId = true;
      break;
    }
  }

  state.buf.push("new Intl." + name + "(" + quote(locale, 0) + ",");
  // `resolvedOptions()` is a call, not a property, so a reusable member needs
  // its own id here — it cannot be reached back through the formatter.
  let optionsRef: Reference;
  if (needsId) {
    optionsRef = new Reference(
      ref,
      null,
      state.flushId,
      null,
      nextRefAccess(state),
    );
    state.buf.push(optionsRef.id + "={");
  } else {
    optionsRef = new Reference(ref, null, state.flushId, state.buf.length);
    state.buf.push("{");
  }
  writeObjectProps(state, options, optionsRef);
  state.buf.push("})");
  return true;
}

function writeIntlLocale(state: State, val: Intl.Locale) {
  state.buf.push("new Intl.Locale(" + quote(val.toString(), 0) + ")");
  return true;
}

// Every `Temporal` type parses back from its own `toString()`, which carries
// the calendar and time zone annotations along with nanosecond precision.
function writeTemporal(state: State, val: object, name: string) {
  state.buf.push(
    "Temporal." + name + ".from(" + quote(val.toString(), 0) + ")",
  );
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
    state.buf.push("(function*(){}())");
    return true;
  }

  const yields: unknown[] = [];
  let returnValue: unknown;
  let needsId: undefined | boolean;

  while (true) {
    const { value, done } = iter.next();
    if (done) {
      returnValue = value;
      break;
    }

    needsId ||= isDedupedMember(value);
    yields.push(value);
  }

  if (returnValue === undefined && !yields.length) {
    state.buf.push("(function*(){})()");
    return true;
  }

  // A return value that is an ancestor has no accessor path of its own to be
  // assigned into later, so it is read back out of a holder that does.
  const heldReturn =
    returnValue !== undefined && isAncestorMember(state, ref, returnValue);

  // Yield/return values live in eagerly evaluated arguments — the body only
  // runs when iterated, so values written there would break reference dedup.
  state.buf.push(
    returnValue === undefined
      ? "(function*(a){yield*a})("
      : heldReturn
        ? "(function*(a,r){yield*a;return r.v})("
        : "(function*(a,r){yield*a;return r})(",
  );
  if (needsId) {
    const arrayRef = new Reference(
      ref,
      null,
      state.flushId,
      null,
      nextRefAccess(state),
    );
    state.buf.push(arrayRef.id + "=");
    writeArray(state, yields, arrayRef);
  } else {
    writeArray(
      state,
      yields,
      new Reference(ref, null, state.flushId, state.buf.length),
    );
  }

  if (heldReturn) {
    const holder = new Reference(
      ref,
      null,
      state.flushId,
      null,
      nextRefAccess(state),
    );
    state.buf.push("," + holder.id + "={}");
    writeProp(state, returnValue, holder, "v");
  } else if (returnValue !== undefined) {
    const sepIndex = state.buf.push(",") - 1;
    if (
      writeProp(state, returnValue, ref, "") &&
      isDedupedMember(returnValue)
    ) {
      // The return value has no accessor path from the generator, so a
      // later reuse can only reach it through an eagerly claimed binding.
      const retRef =
        typeof returnValue === "string"
          ? state.strs.get(returnValue)
          : state.refs.get(returnValue as WeakKey);
      if (retRef && !retRef.id && retRef.scopeId === undefined) {
        retRef.id = nextRefAccess(state);
        state.buf[sepIndex] = "," + retRef.id + "=";
      }
    }
  }

  state.buf.push(")");
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
  state.buf.push(writeMaybeIterableProps(state, val, ref) + "__proto__:null}");
  return true;
}

function writeObjectProps(state: State, val: object, ref: Reference) {
  let sep = "";
  for (const key in val) {
    if (hasOwnProperty.call(val, key)) {
      const escapedKey = toObjectKey(key);
      const member = (val as Record<PropertyKey, unknown>)[key];
      if (member === undefined && state.boundary?.state?.writesPatches) {
        // A patch member set to undefined must overwrite the live value, so
        // it survives as `$` where a resume would elide it.
        state.wroteUndefined = true;
        state.buf.push(sep + escapedKey + ":$");
        sep = ",";
      } else {
        state.buf.push(sep + escapedKey + ":");
        if (writeProp(state, member, ref, escapedKey)) {
          sep = ",";
        } else {
          // A deferred circular value is reassigned last, so it also moves last in
          // key order; holding its slot with `$` costs bytes on every such graph.
          state.buf.pop();
        }
      }
    }
  }

  return sep;
}

// Own props, plus the iterable form for user objects with `Symbol.iterator`
// (e.g. attr tags). Scope flushes call `writeObjectProps` directly — never iterable.
function writeMaybeIterableProps(state: State, val: object, ref: Reference) {
  let sep = writeObjectProps(state, val, ref);

  if (hasSymbolIterator(val)) {
    // Self-first iterables use `yield this` to avoid a circular assignment.
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
      // Remaining items bind outside the lazily evaluated generator body.
      const iterRef = new Reference(
        ref,
        null,
        state.flushId,
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
    while (ref) {
      const { accessor } = ref;
      const debug = ref.parent?.debug;
      if (accessor && debug) {
        const rawAccessor = fromObjectKey(accessor);
        const varLoc = debug.vars?.[rawAccessor];
        const slotName = debug.slots?.[rawAccessor];
        let debugAccess = varLoc ? rawAccessor : undefined;
        let debugLoc = debug.loc;
        if (varLoc) {
          if (Array.isArray(varLoc)) {
            debugAccess = varLoc[0];
            if (varLoc[1]) debugLoc = varLoc[1];
          } else {
            debugLoc = varLoc;
          }
        }

        let display: string;
        if (debugAccess !== undefined) {
          // A `...spread` name composes with the property the runtime read.
          display =
            slotName && debugAccess.startsWith("...")
              ? `\`${slotName}\` from \`${debugAccess}\``
              : JSON.stringify(debugAccess);
        } else {
          display =
            describeAccessor(rawAccessor, slotName) ??
            JSON.stringify(rawAccessor);
        }

        message += ` ${display} in ${debug.file}`;
        if (debugLoc) message += `:${debugLoc}`;
        break;
      }
      // A collection's backing-value link has no accessor; keep walking.
      if (accessor) access = toAccess(accessor) + access;
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

    message += ". Values referenced in the browser must be serializable.";

    const err = new TypeError(message, { cause });
    err.stack = undefined;
    state.boundary.abort(err);
  }
}

// Keep in sync with common/constants/accessor-prefix.debug.ts; the serializer
// parity test walks every prefix.
const accessorPrefixDescriptions: Record<string, string> = {
  BranchScopes: "the branch scopes",
  ClosureScopes: "the closure scopes",
  ClosureSignalIndex: "the closure signal index",
  ConditionalRenderer: "the conditional renderer",
  ControlledObserver: "the controlled observer",
  ControlledHandler: "the change handler",
  ControlledType: "the controlled type",
  ControlledValue: "the controlled value",
  DynamicHTMLLastChild: "the dynamic html",
  EventAttributes: "the event handlers",
  IdFallback: "the generated id",
  KeyedScopes: "the keyed scopes",
  Lifecycle: "the lifecycle handlers",
  Promise: "the pending promise",
  TagVariableChange: "the tag variable change handler",
};

// A readable phrase for an internal `<Prefix>:<node accessor>` scope slot.
function describeAccessor(accessor: string, slotName?: string) {
  const sep = accessor.indexOf(":");
  if (~sep) {
    const description =
      slotName === undefined
        ? accessorPrefixDescriptions[accessor.slice(0, sep)]
        : `the \`${slotName}\` handler`;
    if (description) {
      const node = /^#([a-z-]+)\//i.exec(accessor.slice(sep + 1));
      return node ? `${description} of \`<${node[1]}>\`` : description;
    }
  }
}

// Inverse of `toObjectKey` for error reporting; `quote` emits non-JSON `\x`.
function fromObjectKey(key: string) {
  try {
    if (key[0] === '"') {
      return JSON.parse(key.replace(/\\x/g, "\\u00")) as string;
    }
    if (key[0] === "[") return JSON.parse(key.slice(1, -1)) as string;
  } catch {
    /* fall through to the escaped form */
  }
  return key;
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

type Char = Char.Value;

export function toObjectKey(name: string) {
  if (name === "") {
    return '""';
  }

  if (name === "__proto__") {
    // A computed `__proto__` key preserves an ordinary own property.
    return '["__proto__"]';
  }

  const len = name.length;
  const c0 = name.charCodeAt(0);
  if (c0 >= Char.Digit0 && c0 <= Char.Digit9) {
    // Bare only if all-digit with no leading zero (a canonical array index).
    if (c0 === Char.Digit0) {
      if (len !== 1) {
        return quote(name, 1);
      }
    } else {
      for (let i = 1; i < len; i++) {
        const c = name.charCodeAt(i);
        if (c < Char.Digit0 || c > Char.Digit9) {
          return quote(name, i);
        }
      }

      // A bare digit key round-trips through ToString(ToNumber(...)); only 16+
      // digit runs can break that (precision loss or 1e21 form) and need quoting.
      if (len > 15 && "" + +name !== name) {
        return quote(name, 0);
      }
    }
  } else if (
    (c0 >= Char.LowerA && c0 <= Char.LowerZ) ||
    (c0 >= Char.UpperA && c0 <= Char.UpperZ) ||
    c0 === Char.Underscore ||
    c0 === Char.Dollar
  ) {
    // Leading identifier char: stays bare while the rest are word/digit.
    for (let i = 1; i < len; i++) {
      const c = name.charCodeAt(i);
      if (
        !(
          (c >= Char.LowerA && c <= Char.LowerZ) ||
          (c >= Char.UpperA && c <= Char.UpperZ) ||
          (c >= Char.Digit0 && c <= Char.Digit9) ||
          c === Char.Underscore ||
          c === Char.Dollar
        )
      ) {
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
  return start === "["
    ? accessor
    : start === '"' || (start >= "0" && start <= "9")
      ? "[" + accessor + "]"
      : "." + accessor;
}

// Escapes script-closing characters, NUL, and unpaired UTF-16 surrogates.
const unsafeQuoteReg = /["\\<\n\r\u2028\u2029\0\ud800-\udfff]/u;
export function quote(str: string, startPos: number): string {
  if (!unsafeQuoteReg.test(str)) return '"' + str + '"';

  let result = "";
  let lastPos = 0;

  for (let i = startPos; i < str.length; i++) {
    let replacement: string;
    const code = str.charCodeAt(i);
    switch (code) {
      case 34: // "
        replacement = '\\"';
        break;
      case 92: // \
        replacement = "\\\\";
        break;
      case 60: // <
        replacement = "\\x3C";
        break;
      case 10: // \n
        replacement = "\\n";
        break;
      case 13: // \r
        replacement = "\\r";
        break;
      case 0x2028:
        replacement = "\\u2028";
        break;
      case 0x2029:
        replacement = "\\u2029";
        break;
      case 0:
        replacement = "\\x00";
        break;
      default:
        if (code < 0xd800 || code > 0xdfff) continue;
        if (code < 0xdc00) {
          const next = str.charCodeAt(i + 1);
          if (next >= 0xdc00 && next <= 0xdfff) {
            // Well-formed pair.
            i++;
            continue;
          }
        }
        replacement = "\\u" + code.toString(16);
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

  if (pos !== null && ref.flushId === state.flushId) {
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

    if (parent.flushId === state.flushId || parent.scopeId !== undefined) {
      accessPrevValue = accessId(state, parent) + accessPrevValue;
      break;
    }

    cur = parent;
  } while (cur);

  return ref.id + "=" + accessPrevValue;
}

function assignmentsToString(assignments: string[], value: string) {
  if (assignments.length > 100) {
    return "($=>(" + assignments.join("=$,") + "=$))(" + value + ")";
  }

  return assignments.join("=") + "=" + value;
}

function addAssignment(ref: Reference, assign: string) {
  if (ref.assignments) {
    ref.assignments.push(assign);
  } else {
    ref.assignments = [assign];
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

function stringEntriesToHeadersInit(entries: Iterable<[string, string]>) {
  const list = [...entries];
  if (!list.length) return "";
  // A Headers iterator keeps `Set-Cookie` split; an object literal would drop
  // all but the last, so a repeated name uses the tuple form to round-trip.
  let duplicate = false;
  const seen = new Set<string>();
  for (const [key] of list) {
    if (seen.has(key)) {
      duplicate = true;
      break;
    }
    seen.add(key);
  }

  let result = "";
  let sep = "";
  for (const [key, value] of list) {
    result += duplicate
      ? sep + "[" + quote(key, 0) + "," + quote(value, 0) + "]"
      : sep + toObjectKey(key) + ":" + quote(value, 0);
    sep = ",";
  }

  return duplicate ? "[" + result + "]" : "{" + result + "}";
}

function typedArrayToInitString(view: TypedArray) {
  const suffix = typeof view[0] === "bigint" ? "n" : "";
  let result = "[";
  let sep = "";
  for (let i = 0; i < view.length; i++) {
    result += sep + view[i] + suffix;
    sep = ",";
  }

  result += "]";
  return result;
}

function hasOnlyZeros(typedArray: TypedArray) {
  const zero = typeof typedArray[0] === "bigint" ? 0n : 0;
  for (let i = 0; i < typedArray.length; i++) {
    if (typedArray[i] !== zero) return false;
  }

  return true;
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
