const { hasOwnProperty } = {};
const Generator = (function* () {})().constructor;
const AsyncGenerator = (async function* () {})().constructor;

type Registered = { id: string; access: string; scope: unknown };
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
const REF_START_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$"; // Avoids chars that cannot start a property name and reserves _ for user refs.
const REF_START_CHARS_LEN = REF_START_CHARS.length;
const REF_CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$_";
const REF_CHARS_LEN = REF_CHARS.length;
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
// eslint-disable-next-line @typescript-eslint/ban-types
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
  buf = [] as string[];
  refs = new WeakMap<WeakKey, Reference>();
  assigned = new Set<Reference>();
  promises: Promises | null = null;
}

class Promises {
  public remaining = 0;
  public next: Promise<void> | null = null;
  #resolve: (() => void) | null = null;
  start() {
    if (++this.remaining === 1) {
      this.#next();
    }
  }
  end() {
    this.#resolve?.();

    if (--this.remaining > 0) {
      this.#next();
    } else {
      this.#resolve = null;
      this.next = null;
    }
  }
  #next() {
    this.next = new Promise((resolve) => (this.#resolve = resolve));
  }
}

class Reference {
  public init = "";
  public assigns = "";
  constructor(
    public parent: Reference | null,
    public accessor: string | number | null,
    public flush: number,
    public pos: number | null = null,
    public id: string | null = null,
  ) {
    this.parent = parent;
    this.accessor = accessor;
    this.flush = flush;
    this.pos = pos;
    this.id = id;
  }
}

export class Serializer {
  #state = new State();
  get pending() {
    return this.#state.buf.length
      ? this.#consumePending()
      : this.#state.promises?.next?.then(() => this.#consumePending());
  }
  stringify(val: unknown) {
    try {
      return writeRoot(this.#state, val);
    } finally {
      this.#flush();
    }
  }

  #consumePending() {
    const state = this.#state;
    let result = state.buf[0];

    for (let i = 1; i < state.buf.length; i++) {
      result += state.buf[i];
    }

    if (state.assigned.size) {
      for (const valueRef of state.assigned) {
        result += ";" + valueRef.assigns + (valueRef.init || valueRef.id);
        valueRef.init = "";
      }
    }

    this.#flush();
    return "_=>{" + result + "}";
  }

  #flush() {
    this.#state.flush++;
    this.#state.buf = [];
    this.#state.assigned = new Set();
  }
}

export function register<T extends WeakKey>(
  id: string,
  val: T,
  scope?: unknown,
) {
  REGISTRY.set(val, { id, scope, access: "_._" + toAccess(toObjectKey(id)) });
  return val;
}

export function getRegistered(val: WeakKey) {
  const registered = REGISTRY.get(val);
  if (registered) {
    return {
      id: registered.id,
      scope: registered.scope,
    };
  }
}

export function stringify(val: unknown) {
  return writeRoot(new State(), val);
}

function writeRoot(state: State, root: unknown) {
  if (writeProp(state, root, null, "")) {
    const rootRef = state.refs.get(root as object);
    const { buf, assigned } = state;
    if (rootRef) ensureId(state, rootRef);
    let returnsRoot = true;
    let result = buf[0];

    for (let i = 1; i < buf.length; i++) {
      result += buf[i];
    }

    if (assigned.size) {
      if (assigned.delete(rootRef!)) {
        assigned.add(rootRef!);
      } else {
        returnsRoot = false;
      }

      for (const valueRef of assigned) {
        result += "," + valueRef.assigns + (valueRef.init || valueRef.id);
        valueRef.init = "";
      }
    }

    return "_=>(" + (returnsRoot ? result : result + "," + rootRef!.id!) + ")";
  }

  return "_=>{}";
}

function writeProp(
  state: State,
  val: unknown,
  parent: Reference | null,
  accessor: string | number,
): boolean {
  switch (typeof val) {
    case "string":
      return writeString(state, val);

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
      return false;
  }
}

function writeReferenceOr(
  state: State,
  write: (state: State, val: any, ref: Reference) => boolean,
  val: WeakKey,
  parent: Reference | null,
  accessor: string | number,
) {
  let ref = state.refs.get(val);
  if (ref) {
    if (ref.init) {
      ref.assigns += ensureId(state, parent!) + toAccess(accessor) + "=";
      return false;
    }

    if (isCircular(parent, ref)) {
      if (!ref.assigns) {
        ensureId(state, ref);
        state.assigned.add(ref);
      }
      ref.assigns += ensureId(state, parent!) + toAccess(accessor) + "=";
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
    (ref = new Reference(parent, accessor, state.flush, state.buf.length)),
  );
  if (write(state, val, ref)) return true;

  state.refs.delete(ref);
  return false;
}

function writeRegistered(
  state: State,
  val: WeakKey,
  parent: Reference | null,
  accessor: string | number,
  { access, scope }: Registered,
) {
  if (scope) {
    const scopeRef = state.refs.get(scope);
    const fnRef = new Reference(
      parent,
      accessor,
      state.flush,
      state.buf.length,
    );
    state.refs.set(val, fnRef);
    if (scopeRef) {
      const scopeId = ensureId(state, scopeRef);
      if (isCircular(parent, scopeRef)) {
        state.assigned.add(fnRef);
        fnRef.init = access + "(" + scopeId + ")";
        fnRef.assigns += ensureId(state, parent) + toAccess(accessor) + "=";
        return false;
      }

      state.buf.push(access + "(" + scopeId + ")");
    } else {
      state.buf.push(access + "(");
      writeProp(state, scope, parent, "");
      const scopeRef = state.refs.get(scope);
      if (scopeRef) ensureId(state, scopeRef);
      state.buf.push(")");
    }
  } else {
    state.buf.push(access);
  }

  return true;
}

function writeString(state: State, val: string) {
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
  // eslint-disable-next-line @typescript-eslint/ban-types
  val: Function,
  parent: Reference | null,
  accessor: string | number,
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
  accessor: string | number,
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

function writeNever() {
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
  accessor: string | number,
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
  return false;
}

function writePlainObject(state: State, val: object, ref: Reference) {
  state.buf.push("{");
  writeObjectProps(state, val, ref);
  state.buf.push("}");
  return true;
}

function writeArray(state: State, val: unknown[], ref: Reference) {
  state.buf.push("[");
  writeProp(state, val[0], ref, 0);

  for (let i = 1; i < val.length; i++) {
    state.buf.push(",");
    writeProp(state, val[i], ref, i);
  }

  state.buf.push("]");
  return true;
}

function writeDate(state: State, val: Date) {
  state.buf.push('new Date("' + val.toISOString() + '")');
  return true;
}

function writeRegExp(state: State, val: RegExp) {
  state.buf.push(val + "");
  return true;
}

function writePromise(state: State, val: Promise<unknown>, ref: Reference) {
  const pId = nextRefAccess(state);
  const pRef = new Reference(ref, null, state.flush, null, pId);
  state.buf.push("new Promise((f,r)=>" + pId + "={f,r})");
  val.then(
    (v) => writeAsyncCall(state, pRef, "f", v, pId),
    (v) => writeAsyncCall(state, pRef, "r", v, pId),
  );
  (state.promises ||= new Promises()).start();
  return true;
}

function writeMap(state: State, val: Map<unknown, unknown>, ref: Reference) {
  if (!val.size) {
    state.buf.push("new Map");
    return true;
  }

  const items: (undefined | [unknown?, unknown?])[] = [];
  let assigns = "";
  for (let [itemKey, itemValue] of val) {
    if (itemKey === val) {
      itemKey = undefined;
      assigns += "i[" + items.length + "][0]=";
    }

    if (itemValue === val) {
      itemValue = undefined;
      assigns += "i[" + items.length + "][1]=";
    }

    if (itemValue === undefined) {
      items.push([itemKey]);
    } else {
      items.push([itemKey, itemValue]);
    }
  }

  const arrayRef = new Reference(
    ref,
    null,
    state.flush,
    null,
    nextRefAccess(state),
  );
  state.buf.push(
    (assigns
      ? "((m,i)=>(" + assigns + "m,i.forEach(i=>m.set(i[0],i[1])),m))(new Map,"
      : "new Map(") +
      arrayRef.id +
      "=",
  );
  writeArray(state, items, arrayRef);
  state.buf.push(")");
  return true;
}

function writeSet(state: State, val: Set<unknown>, ref: Reference) {
  if (!val.size) {
    state.buf.push("new Set");
    return true;
  }

  const items: (unknown | undefined)[] = [];
  let assigns = "";
  for (let item of val) {
    if (item === val) {
      item = undefined;
      assigns += "i[" + items.length + "]=";
    }

    items.push(item);
  }

  const arrayRef = new Reference(
    ref,
    null,
    state.flush,
    null,
    nextRefAccess(state),
  );
  state.buf.push(
    (assigns
      ? "((s,i)=>(" + assigns + "s,i.forEach(i=>s.add(i)),s))(new Set,"
      : "new Set(") +
      arrayRef.id +
      "=",
  );

  writeArray(state, items, arrayRef);
  state.buf.push(")");
  return true;
}

function writeArrayBuffer(state: State, val: ArrayBuffer) {
  let result = "";

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
      valStr += sep + "[" + quote(key, 0) + "," + quote(value, 0) + "]";
      sep = ",";
    }
  }

  if (sep === "[") {
    state.buf.push("new FormData");
  } else {
    state.buf.push(
      "((f,i)=>(f,i.forEach(i=>f.append(i[0],i[1])),f))(new FormData," +
        valStr +
        "])",
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
    sep = ",";
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
    sep = ",";
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
  if (val.locked) return false;

  const iterId = nextRefAccess(state);
  const iterRef = new Reference(ref, null, state.flush, null, iterId);
  state.buf.push(
    "new ReadableStream({start(c){(async(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()]))=>{for(i of a)v=await i,i==l?c.close():c.enqueue(v)})(" +
      iterId +
      "={}).catch(e=>c.error(e))}})",
  );
  const reader = val.getReader();
  const promises = (state.promises ||= new Promises());
  promises.start();
  reader.read().then(onFulfilled, onRejected);

  function onFulfilled({ value, done }: ReadableStreamReadResult<unknown>) {
    if (done) {
      writeAsyncCall(state, iterRef, "r", value);
    } else {
      promises.start();
      reader.read().then(onFulfilled, onRejected);
      writeAsyncCall(state, iterRef, "f", value);
    }
  }

  function onRejected(reason: unknown) {
    writeAsyncCall(state, iterRef, "j", reason);
  }

  return true;
}

function writeGenerator(state: State, iter: Generator, ref: Reference) {
  let sep = "";
  state.buf.push("(function*(){");
  // eslint-disable-next-line no-constant-condition
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
  const iterId = nextRefAccess(state);
  const iterRef = new Reference(ref, null, state.flush, null, iterId);
  state.buf.push(
    "(async function*(_,f,v,l,i,p=a=>l=new Promise((r,j)=>{f=_.r=r;_.j=j}),a=((_.f=v=>{f(v);a.push(p())}),[p()])){for(i of a)v=await i,i!=l&&(yield v);return v})(" +
      iterId +
      "={})",
  );
  const promises = (state.promises ||= new Promises());
  promises.start();
  iter.next().then(onFulfilled, onRejected);

  function onFulfilled({ value, done }: IteratorResult<unknown>) {
    if (done) {
      writeAsyncCall(state, iterRef, "r", value);
    } else {
      promises.start();
      iter.next().then(onFulfilled, onRejected);
      writeAsyncCall(state, iterRef, "f", value);
    }
  }

  function onRejected(reason: unknown) {
    writeAsyncCall(state, iterRef, "j", reason);
  }

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
    state.buf.push(sep + "[Symbol.iterator]:");
    sep = ",";
    if (
      !writeReferenceOr(
        state,
        writeNever,
        val[Symbol.iterator],
        ref,
        "Symbol.iterator",
      )
    ) {
      const arrayRef = new Reference(
        ref,
        null,
        state.flush,
        null,
        nextRefAccess(state),
      );
      state.buf.push("(a=>()=>a.values())(" + arrayRef.id + "=");
      writeArray(state, [...val], arrayRef);
      state.buf.push(")");
    }
  }

  return sep;
}

function writeAsyncCall(
  state: State,
  ref: Reference,
  method: string,
  value: unknown,
  preferredValueId: string | null = null,
) {
  state.promises!.end();
  const valueStartIndex = state.buf.push(
    (state.buf.length === 0 ? "" : ";") + ref.id + "." + method + "(",
  );
  if (writeProp(state, value, ref, "")) {
    const valueRef = state.refs.get(value as object);
    if (valueRef && !valueRef.id) {
      valueRef.id = preferredValueId || nextRefAccess(state);
      state.buf[valueStartIndex] =
        valueRef.id + "=" + state.buf[valueStartIndex];
    }
  }
  state.buf.push(")");
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

function toObjectKey(name: string) {
  const invalidKeyStart = getInvalidObjectKeyPos(name);
  return invalidKeyStart === -1 ? name : quote(name, invalidKeyStart);
}

function toAccess(accessor: string | number) {
  return typeof accessor === "number" || accessor[0] === '"'
    ? "[" + accessor + "]"
    : "." + accessor;
}

function getInvalidObjectKeyPos(name: string) {
  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    if (
      !(
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9") ||
        char === "$" ||
        char === "_"
      )
    ) {
      return i;
    }
  }

  return -1;
}

// Creates a JavaScript double quoted string and escapes all characters not listed as DoubleStringCharacters on
// Also includes "<" to escape "</script>" and "\" to avoid invalid escapes in the output.
// http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
function quote(str: string, startPos: number): string {
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
  return ref.id || assignId(state, ref);
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

  let cur = ref;
  let accessPrevValue = "";

  do {
    accessPrevValue = toAccess(cur.accessor!) + accessPrevValue;
    const parent = cur.parent!;

    if (parent.id) {
      accessPrevValue = parent.id + accessPrevValue;
      break;
    }

    if (parent.flush === state.flush) {
      accessPrevValue = ensureId(state, parent) + accessPrevValue;
      break;
    }

    cur = parent;
  } while (cur);

  return ref.id + "=" + accessPrevValue;
}

function nextRefAccess(state: State) {
  let index = state.ids++;
  let mod = index % REF_START_CHARS_LEN;
  let id = "_." + REF_START_CHARS[mod];
  index = (index - mod) / REF_START_CHARS_LEN;

  while (index > 0) {
    mod = index % REF_CHARS_LEN;
    id += REF_CHARS[mod];
    index = (index - mod) / REF_CHARS_LEN;
  }

  return id;
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
