import { types as t } from "@marko/compiler";
import { importDefault, importNamed } from "@marko/compiler/babel-utils";

import { generateUid } from "../util/generate-uid";

// AST backend of the resume serializer's (html/serializer.ts) semantics:
// shared values hoist, cycles patch up after, functions cross as imports.

export interface SerializeContext {
  file: t.BabelFile;
  /** value -> original import request + export name (from the loader). */
  exportedValues: Map<unknown, { request: string; name: string }>;
  /** Hoisted `const` declarations, emitted as a leading static scriptlet. */
  decls: t.Statement[];
  /** Cycle-closing assignments, emitted as a trailing static scriptlet. */
  assigns: t.Statement[];
  refs: Map<unknown, Ref>;
  /** Comptime-owned functions: factory reference + capture values to apply. */
  resolveFunction?(
    value: unknown,
  ): { factory: t.Identifier; captures: unknown[] } | undefined;
  /** Structural-only values (fragments, snippets): a targeted refusal. */
  describeSpecial?(value: unknown): string | undefined;
  onError(message: string): never;
}

interface Ref {
  /** Claimed hoisted binding name (shared or cyclic values). */
  id?: string;
  /** The currently inlined expression for this value, morphed on reuse. */
  node?: t.Expression;
  /** Index into `decls` of the declaration this value was inlined within. */
  declIndex: number;
  building?: boolean;
}

/** The slot currently being written: a position within a container value. */
interface Frame {
  parent: Frame | null;
  /** Ref of the containing value (null at a serialization root). */
  container: Ref | null;
  /** Property/index within the container (null when not statically addressable). */
  accessor: string | number | null;
}

const ROOT: Frame = { parent: null, container: null, accessor: null };

const KNOWN_OBJECTS = new Map<unknown, string>([
  [Atomics, "Atomics"],
  [console, "console"],
  [globalThis, "globalThis"],
  [globalThis.crypto, "crypto"],
  [Intl, "Intl"],
  [JSON, "JSON"],
  [Math, "Math"],
  [Reflect, "Reflect"],
]);

const KNOWN_SYMBOLS = new Map<symbol, string>(
  Object.getOwnPropertyNames(Symbol)
    .filter((name) => typeof (Symbol as any)[name] === "symbol")
    .map((name) => [(Symbol as any)[name], name]),
);

export function createSerializeContext(
  file: t.BabelFile,
  exportedValues: SerializeContext["exportedValues"],
  onError: SerializeContext["onError"],
): SerializeContext {
  return {
    file,
    exportedValues,
    decls: [],
    assigns: [],
    refs: new Map(),
    onError,
  };
}

export function serializeValue(
  ctx: SerializeContext,
  value: unknown,
): t.Expression {
  return write(ctx, value, ROOT);
}

function write(
  ctx: SerializeContext,
  value: unknown,
  frame: Frame,
): t.Expression {
  switch (typeof value) {
    case "undefined":
      return t.identifier("undefined");
    case "boolean":
      return t.booleanLiteral(value);
    case "number":
      return writeNumber(value);
    case "bigint":
      return writeBigInt(value);
    case "string":
      return t.stringLiteral(value);
    case "symbol":
      return writeSymbol(ctx, value, frame);
    case "function":
    case "object":
      if (value === null) return t.nullLiteral();
      return writeReference(ctx, value as object, frame);
    default:
      return fail(ctx, value, frame);
  }
}

function writeNumber(value: number): t.Expression {
  if (Number.isNaN(value)) return t.identifier("NaN");
  if (value === Infinity) return t.identifier("Infinity");
  if (value === -Infinity) {
    return t.unaryExpression("-", t.identifier("Infinity"));
  }
  if (value < 0 || Object.is(value, -0)) {
    return t.unaryExpression("-", t.numericLiteral(-value));
  }
  return t.numericLiteral(value);
}

function writeBigInt(value: bigint): t.Expression {
  return value < 0
    ? t.unaryExpression("-", t.bigIntLiteral((-value).toString()))
    : t.bigIntLiteral(value.toString());
}

function writeSymbol(ctx: SerializeContext, value: symbol, frame: Frame) {
  const known = KNOWN_SYMBOLS.get(value);
  if (known) {
    return t.memberExpression(t.identifier("Symbol"), t.identifier(known));
  }

  const key = Symbol.keyFor(value);
  if (key !== undefined) {
    return t.callExpression(
      t.memberExpression(t.identifier("Symbol"), t.identifier("for")),
      [t.stringLiteral(key)],
    );
  }

  return fail(ctx, value, frame);
}

// First use inlines; reuse promotes to a hoisted const (morphing the first
// emission); use during construction is a cycle, patched after the decls.
function writeReference(
  ctx: SerializeContext,
  value: object,
  frame: Frame,
): t.Expression {
  const special = ctx.describeSpecial?.(value);
  if (special) return fail(ctx, value, frame, special);

  const exported = ctx.exportedValues.get(value);
  if (exported) {
    const local =
      exported.name === "default"
        ? importDefault(ctx.file, exported.request, "comptimeDefault")
        : importNamed(ctx.file, exported.request, exported.name);
    return t.identifier(local.name);
  }

  const known = KNOWN_OBJECTS.get(value);
  if (known) return t.identifier(known);

  let ref = ctx.refs.get(value);
  if (ref) {
    if (ref.building) {
      // Cycle: hoist the ancestor and patch this slot after the decls.
      const id = ensureId(ctx, ref);
      const lhs = accessorChain(ref, frame, id);
      if (!lhs) {
        return fail(
          ctx,
          value,
          frame,
          "circular values are only supported within plain objects and arrays",
        );
      }
      ctx.assigns.push(
        t.expressionStatement(
          t.assignmentExpression("=", lhs, t.identifier(id)),
        ),
      );
      // The slot is created as `undefined` and patched by the assignment.
      return t.identifier("undefined");
    }
    return t.identifier(ensureId(ctx, ref));
  }

  ref = { declIndex: ctx.decls.length, building: true };
  ctx.refs.set(value, ref);
  const node =
    typeof value === "function"
      ? writeFunction(ctx, value, ref, frame)
      : writeObject(ctx, value, ref, frame);
  ref.building = false;

  if (ref.id) {
    // A cycle claimed an id while this value was being built: hoist it now.
    ctx.decls.push(constDecl(ref.id, node));
    ref.declIndex = ctx.decls.length - 1;
    return t.identifier(ref.id);
  }

  ref.node = node;
  return node;
}

function ensureId(ctx: SerializeContext, ref: Ref) {
  if (!ref.id) {
    ref.id = generateUid("comptime");
    const node = ref.node;
    if (node) {
      // Hoist the current contents; the original node becomes a reference.
      const init = { ...node } as t.Expression;
      ctx.decls.splice(
        Math.min(ref.declIndex, ctx.decls.length),
        0,
        constDecl(ref.id, init),
      );
      morphInto(node, t.identifier(ref.id));
      ref.node = undefined;
    }
  }
  return ref.id;
}

function constDecl(name: string, init: t.Expression) {
  return t.variableDeclaration("const", [
    t.variableDeclarator(t.identifier(name), init),
  ]);
}

function morphInto(node: t.Node, replacement: t.Node) {
  for (const key of Object.keys(node)) {
    if (key !== "loc" && key !== "start" && key !== "end") {
      delete (node as any)[key];
    }
  }
  Object.assign(node, replacement);
}

/** Assignment target from the hoisted cyclic ancestor to the current slot;
 * undefined when a link lacks a static accessor (Map/Set). */
function accessorChain(target: Ref, frame: Frame, targetId: string) {
  const accessors: (string | number)[] = [];
  for (let cur: Frame | null = frame; cur; cur = cur.parent) {
    if (cur.accessor == null || !cur.container) return undefined;
    accessors.push(cur.accessor);
    if (cur.container === target) break;
    if (!cur.parent) return undefined;
  }

  let lhs: t.Expression = t.identifier(targetId);
  for (let i = accessors.length; i-- > 0;) {
    const accessor = accessors[i];
    lhs =
      typeof accessor === "number"
        ? t.memberExpression(lhs, t.numericLiteral(accessor), true)
        : isValidKey(accessor)
          ? t.memberExpression(lhs, t.identifier(accessor))
          : t.memberExpression(lhs, t.stringLiteral(accessor), true);
  }
  return lhs as t.MemberExpression;
}

function writeObject(
  ctx: SerializeContext,
  value: object,
  ref: Ref,
  frame: Frame,
): t.Expression {
  if (Array.isArray(value)) {
    return t.arrayExpression(
      value.map((item, i) =>
        write(ctx, item, { parent: frame, container: ref, accessor: i }),
      ),
    );
  }

  if (value instanceof Date) {
    return t.newExpression(t.identifier("Date"), [
      t.numericLiteral(value.getTime()),
    ]);
  }

  if (value instanceof RegExp) {
    return t.regExpLiteral(value.source, value.flags);
  }

  if (value instanceof URL) {
    return t.newExpression(t.identifier("URL"), [t.stringLiteral(value.href)]);
  }

  if (value instanceof Map) {
    const entry: Frame = { parent: frame, container: ref, accessor: null };
    return t.newExpression(t.identifier("Map"), [
      t.arrayExpression(
        [...value].map(([k, v]) =>
          t.arrayExpression([write(ctx, k, entry), write(ctx, v, entry)]),
        ),
      ),
    ]);
  }

  if (value instanceof Set) {
    const entry: Frame = { parent: frame, container: ref, accessor: null };
    return t.newExpression(t.identifier("Set"), [
      t.arrayExpression([...value].map((v) => write(ctx, v, entry))),
    ]);
  }

  if (isThenable(value)) {
    return fail(
      ctx,
      value,
      frame,
      "promises cannot cross into runtime code; resolve the value before compiling instead",
    );
  }

  const proto = Object.getPrototypeOf(value);
  if (proto === Object.prototype || proto === null) {
    const props: t.ObjectProperty[] = [];
    if (proto === null) {
      // The literal `__proto__:` key form deliberately sets the prototype
      // here, so null-proto values (e.g. `inert` data) round-trip.
      props.push(t.objectProperty(t.identifier("__proto__"), t.nullLiteral()));
    }
    for (const key of Object.keys(value)) {
      const propValue = write(ctx, (value as Record<string, unknown>)[key], {
        parent: frame,
        container: ref,
        accessor: key,
      });
      props.push(
        // A literal `__proto__:` key would set the prototype; only the
        // computed form creates the own property.
        key === "__proto__"
          ? t.objectProperty(t.stringLiteral(key), propValue, true)
          : t.objectProperty(
              isValidKey(key) ? t.identifier(key) : t.stringLiteral(key),
              propValue,
            ),
      );
    }
    return t.objectExpression(props);
  }

  return writeUnserializable(ctx, value, frame);
}

/** A comptime-owned function crosses as a factory call: the factory holds
 * the source (virtual module or inline) and receives its captured values. */
function writeFunction(
  ctx: SerializeContext,
  value: object,
  ref: Ref,
  frame: Frame,
): t.Expression {
  const resolved = ctx.resolveFunction?.(value);
  if (!resolved) return writeUnserializable(ctx, value, frame);
  const capture: Frame = { parent: frame, container: ref, accessor: null };
  return t.callExpression(
    resolved.factory,
    resolved.captures.map((value) => write(ctx, value, capture)),
  );
}

function writeUnserializable(
  ctx: SerializeContext,
  value: unknown,
  frame: Frame,
): never {
  return fail(
    ctx,
    value,
    frame,
    typeof value === "function"
      ? "this function is not an export of any module loaded at compile time, and its source is not comptime code the compiler owns. Export it from a `comptime import`ed module, or declare it in `comptime` code"
      : undefined,
  );
}

function fail(
  ctx: SerializeContext,
  value: unknown,
  frame: Frame,
  reason?: string,
): never {
  let access = "";
  for (let cur: Frame | null = frame; cur; cur = cur.parent) {
    if (cur.accessor != null) {
      access =
        (typeof cur.accessor === "number"
          ? `[${cur.accessor}]`
          : isValidKey(cur.accessor)
            ? `.${cur.accessor}`
            : `[${JSON.stringify(cur.accessor)}]`) + access;
    }
  }

  return ctx.onError(
    `Unable to serialize ${describe(value)}${
      access ? ` (reading ${access.replace(/^\./, "")})` : ""
    }${reason ? `: ${reason}` : ""}.`,
  );
}

function describe(value: unknown) {
  switch (typeof value) {
    case "function":
      return `the function \`${(value as { name?: string }).name || "(anonymous)"}\``;
    case "symbol":
      return String(value);
    case "object": {
      const name = value?.constructor?.name;
      return !name || name === "Object"
        ? "an object"
        : `an instance of \`${name}\``;
    }
    default:
      return `a ${typeof value} value`;
  }
}

function isThenable(value: object) {
  return typeof (value as PromiseLike<unknown>).then === "function";
}

function isValidKey(key: string | number) {
  return (
    typeof key === "string" &&
    key !== "__proto__" &&
    /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)
  );
}
