// Airlock for untrusted data entering comptime evaluation: a deep snapshot
// that is inert by construction (frozen, null-prototype, data only).

export type Inert<T> = T extends Primitive
  ? T
  : T extends (...args: never) => unknown
    ? never
    : T extends readonly (infer Item)[]
      ? readonly Inert<Item>[]
      : T extends object
        ? { readonly [Key in keyof T]: Inert<T[Key]> }
        : never;

type Primitive = string | number | boolean | bigint | null | undefined;

const inertValues = new WeakSet<object>();

/** Returns a deep, frozen, null-prototype snapshot of plain data (JSON shape
 * plus `undefined`/`bigint`); behavior errors with its path, symbol keys drop. */
export function inert<T>(value: T): Inert<T> {
  return walk(value, new Map(), "") as Inert<T>;
}

/** True when `value` is a primitive or an object produced by `inert`. */
export function isInert(value: unknown): boolean {
  return typeof value === "object" && value !== null
    ? inertValues.has(value)
    : typeof value !== "function";
}

function walk(
  value: unknown,
  seen: Map<object, object>,
  path: string,
): unknown {
  switch (typeof value) {
    case "function":
      return fail(
        `the function \`${(value as { name?: string }).name || "(anonymous)"}\``,
        path,
        "inert data cannot contain functions",
      );
    case "symbol":
      return fail(String(value), path, "inert data cannot contain symbols");
    case "object":
      break;
    default:
      return value;
  }

  if (value === null) return null;
  if (inertValues.has(value)) return value;
  const cloned = seen.get(value);
  if (cloned) return cloned;

  if (Array.isArray(value)) {
    for (const key of Object.keys(value)) {
      if (!/^(0|[1-9][0-9]*)$/.test(key)) {
        fail(
          "the array",
          path,
          `arrays with named properties (\`${key}\`) are not supported`,
        );
      }
    }

    const out: unknown[] = [];
    seen.set(value, out);
    for (let i = 0; i < value.length; i++) {
      const itemPath = `${path}[${i}]`;
      out.push(walk(read(value, i, itemPath), seen, itemPath));
    }
    return finalize(out);
  }

  const proto = Object.getPrototypeOf(value);
  if (proto !== Object.prototype && proto !== null) {
    return fail(
      `an instance of \`${value.constructor?.name || "an unknown class"}\``,
      path,
      "only plain objects and arrays are supported; convert it to plain data first",
    );
  }

  const out: Record<string, unknown> = Object.create(null);
  seen.set(value, out);
  for (const key of Object.keys(value)) {
    const propPath = joinKey(path, key);
    out[key] = walk(read(value, key, propPath), seen, propPath);
  }
  return finalize(out);
}

function finalize(out: object) {
  inertValues.add(Object.freeze(out));
  return out;
}

function read(container: object, key: string | number, path: string) {
  const desc = Object.getOwnPropertyDescriptor(container, key);
  if (desc && !("value" in desc)) {
    fail(
      "an accessor property",
      path,
      "inert data cannot contain getters or setters; copy the value into a plain property first",
    );
  }
  return desc?.value;
}

function joinKey(path: string, key: string) {
  if (/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
    return path ? `${path}.${key}` : key;
  }
  return `${path}[${JSON.stringify(key)}]`;
}

function fail(what: string, path: string, reason: string): never {
  throw new TypeError(
    `Unable to make ${what} inert${path ? ` (reading ${path})` : ""}: ${reason}.`,
  );
}
