import { types as t } from "@marko/compiler";
import {
  generator,
  pluginTransformModulesCommonjs,
  pluginTransformTypeScript,
  transformSync,
  traverse,
} from "@marko/compiler/internal/babel";
import { createRequire } from "module";
import path from "path";
import vm from "vm";

// Evaluates a template's comptime program via a sync CommonJS-style loader
// in the compiler's realm; module instances cache in the build `cache`.

const MODULE_CACHE_KEY = "comptime:modules";

// Fixed ceiling on user comptime execution per template: a hung loop fails
// the build loudly instead of hanging it.
const EVAL_BUDGET_MS = 30_000;
const INVOKE_KEY = "$ctInvoke";
const invokeScript = new vm.Script(`${INVOKE_KEY}()`, {
  filename: "marko-comptime-guard",
});

export interface ComptimeGuard {
  run<T>(fn: () => T): T;
}

export function createComptimeGuard(budgetMs = EVAL_BUDGET_MS): ComptimeGuard {
  const deadline = Date.now() + budgetMs;
  return {
    run(fn) {
      const globals = globalThis as Record<string, unknown>;
      const prev = globals[INVOKE_KEY];
      globals[INVOKE_KEY] = fn;
      try {
        return invokeScript.runInThisContext({
          timeout: Math.max(1, deadline - Date.now()),
        });
      } catch (err) {
        if (
          (err as { code?: string })?.code === "ERR_SCRIPT_EXECUTION_TIMEOUT"
        ) {
          const budget = new Error(
            `Evaluation exceeded the fixed ${budgetMs / 1000}s comptime budget; compile-time code must finish while the template compiles.`,
            { cause: err },
          );
          (budget as { comptimeBudget?: boolean }).comptimeBudget = true;
          throw budget;
        }
        throw err;
      } finally {
        globals[INVOKE_KEY] = prev;
      }
    },
  };
}

interface LoadedModule {
  exports: unknown;
  namespace: Record<string, unknown>;
}

export interface ComptimeLoader {
  /** value -> import request + export name, for the serializer. */
  exportedValues: Map<unknown, { request: string; name: string }>;
  requireNamespace(request: string): Record<string, unknown>;
}

export interface ComptimeThunks {
  [id: string]: (...args: unknown[]) => unknown;
}

export interface EvaluatedComptimeModule {
  thunks: ComptimeThunks;
  getBindings(): Record<string, unknown>;
}

export type ComptimeFn =
  t.FunctionDeclaration | t.FunctionExpression | t.ArrowFunctionExpression;

export interface ComptimeFnRecord {
  /** Pristine user AST (nested `$ctReg` wrappers are stripped at emission). */
  node: ComptimeFn;
  /** Captured comptime names, sorted; factory parameters in this order. */
  captures: string[];
  getCaptures(): Record<string, unknown>;
}

/** function value -> its owned source, for the virtual-module handoff. */
export type ComptimeFnRegistry = WeakMap<object, ComptimeFnRecord>;

export const FN_REG_NAME = "$ctReg";

export function createLoader(
  file: t.BabelFile,
  guard: ComptimeGuard,
  exportedValues: ComptimeLoader["exportedValues"] = new Map(),
): ComptimeLoader {
  const filename = file.opts.filename as string;
  const { fileSystem, cache } = file.markoOpts;
  const watchFiles = file.metadata.marko.watchFiles;
  let moduleCache = cache.get(MODULE_CACHE_KEY) as
    Map<string, LoadedModule> | undefined;
  if (!moduleCache) {
    cache.set(MODULE_CACHE_KEY, (moduleCache = new Map()));
  }

  return {
    exportedValues,
    requireNamespace(request: string) {
      const { namespace } = load(request, filename);
      for (const name of Object.keys(namespace)) {
        const value = namespace[name];
        if (
          (typeof value === "function" ||
            (typeof value === "object" && value !== null)) &&
          !exportedValues.has(value)
        ) {
          exportedValues.set(value, { request, name });
        }
      }
      return namespace;
    },
  };

  function load(request: string, from: string): LoadedModule {
    if (request[0] !== "." && request[0] !== "/") {
      // Bare specifier: node's own resolution (incl. require(esm)).
      const nativeRequire = createRequire(from);
      const resolved = nativeRequire.resolve(request);
      let mod = moduleCache!.get(resolved);
      if (!mod) {
        const exports = guard.run(() => nativeRequire(request));
        moduleCache!.set(
          resolved,
          (mod = { exports, namespace: toNamespace(exports) }),
        );
      }
      return mod;
    }

    const resolved = resolveFile(path.resolve(path.dirname(from), request));
    if (!resolved) {
      throw new Error(
        `Unable to resolve ${JSON.stringify(request)} from ${JSON.stringify(from)}`,
      );
    }

    let mod = moduleCache!.get(resolved);
    if (mod) return mod;

    if (resolved.endsWith(".marko")) {
      throw new Error(
        `Cannot \`comptime import\` a Marko template (${JSON.stringify(request)}).`,
      );
    }

    watchFiles.push(resolved);
    const source = fileSystem.readFileSync(resolved, "utf-8") as string;

    if (resolved.endsWith(".json")) {
      const parsed = JSON.parse(source);
      moduleCache!.set(
        resolved,
        (mod = { exports: parsed, namespace: { default: parsed } }),
      );
      return mod;
    }

    const { code } = transformSync(source, {
      filename: resolved,
      configFile: false,
      babelrc: false,
      browserslistConfigFile: false,
      sourceType: "unambiguous",
      compact: false,
      plugins: [
        ...(/\.[cm]?tsx?$/.test(resolved) ? [pluginTransformTypeScript] : []),
        pluginTransformModulesCommonjs,
      ],
    })!;

    const module = { exports: {} as unknown };
    let namespace: Record<string, unknown> | undefined;
    // Cached before evaluation so require cycles see partial exports.
    moduleCache!.set(
      resolved,
      (mod = {
        get exports() {
          return module.exports;
        },
        get namespace() {
          return (namespace ??= toNamespace(module.exports));
        },
      }),
    );

    const wrapper = vm.runInThisContext(
      `(function(exports, require, module, __filename, __dirname){${code}\n})`,
      { filename: resolved },
    );
    guard.run(() =>
      wrapper(
        module.exports,
        (spec: string) => load(spec, resolved).exports,
        module,
        resolved,
        path.dirname(resolved),
      ),
    );
    return mod;
  }

  function resolveFile(base: string) {
    for (const candidate of [
      base,
      `${base}.ts`,
      `${base}.mts`,
      `${base}.cts`,
      `${base}.js`,
      `${base}.mjs`,
      `${base}.cjs`,
      `${base}.json`,
      path.join(base, "index.ts"),
      path.join(base, "index.js"),
      path.join(base, "index.mjs"),
      path.join(base, "index.cjs"),
      path.join(base, "index.json"),
    ]) {
      try {
        if (fileSystem.statSync(candidate).isFile()) return candidate;
      } catch {
        // continue
      }
    }
  }
}

function toNamespace(exports: unknown): Record<string, unknown> {
  if (exports && typeof exports === "object") {
    if (
      (exports as { __esModule?: boolean }).__esModule ||
      (exports as { [Symbol.toStringTag]?: string })[Symbol.toStringTag] ===
        "Module"
    ) {
      return exports as Record<string, unknown>;
    }

    return {
      ...(exports as Record<string, unknown>),
      default: exports,
    };
  }

  return { default: exports };
}

export interface ComptimeModuleInput {
  /** `comptime import` declarations, in document order. */
  imports: t.ImportDeclaration[];
  /** Remaining `comptime` statements, in document order. */
  statements: t.Statement[];
  /** Expression-site thunks, keyed by id. */
  thunks: { id: string; fn: t.Expression }[];
  /** Module comptime binding names exposed for lowering. */
  bindingNames: string[];
  /** Comptime-owned functions register here so their source can cross. */
  fnRegistry: ComptimeFnRegistry;
  /** Names a comptime-born function may capture (bindings, imports, slots). */
  capturable: Set<string>;
}

export function evaluateComptimeModule(
  file: t.BabelFile,
  loader: ComptimeLoader,
  guard: ComptimeGuard,
  input: ComptimeModuleInput,
): EvaluatedComptimeModule {
  const requireId = t.identifier("$ctRequire");
  const thunksId = t.identifier("$ctThunks");
  const bindingsId = t.identifier("$ctBindings");
  const segments: {
    node: t.Statement;
    source?: t.Node;
    instrument?: boolean;
  }[] = [];

  for (const decl of input.imports) {
    const request = t.stringLiteral(decl.source.value);
    const requireCall = t.callExpression(t.cloneNode(requireId), [request]);

    if (!decl.specifiers.length) {
      segments.push({
        node: t.expressionStatement(requireCall),
        source: decl,
      });
      continue;
    }

    const namespace = decl.specifiers.find((s) =>
      t.isImportNamespaceSpecifier(s),
    );
    const named = decl.specifiers.filter(
      (s): s is t.ImportSpecifier | t.ImportDefaultSpecifier =>
        !t.isImportNamespaceSpecifier(s),
    );
    const declarators: t.VariableDeclarator[] = [];

    if (namespace) {
      declarators.push(
        t.variableDeclarator(t.identifier(namespace.local.name), requireCall),
      );
      if (named.length) {
        declarators.push(
          t.variableDeclarator(
            buildImportPattern(named),
            t.identifier(namespace.local.name),
          ),
        );
      }
    } else {
      declarators.push(
        t.variableDeclarator(buildImportPattern(named), requireCall),
      );
    }

    segments.push({
      node: t.variableDeclaration("const", declarators),
      source: decl,
    });
  }

  for (const statement of input.statements) {
    segments.push({ node: statement, source: statement, instrument: true });
  }

  for (const { id, fn } of input.thunks) {
    segments.push({
      node: t.expressionStatement(
        t.assignmentExpression(
          "=",
          t.memberExpression(t.cloneNode(thunksId), t.identifier(id)),
          fn,
        ),
      ),
      instrument: true,
    });
  }

  segments.push({
    node: t.expressionStatement(
      t.assignmentExpression(
        "=",
        t.memberExpression(t.cloneNode(bindingsId), t.identifier("get")),
        t.arrowFunctionExpression(
          [],
          t.objectExpression(
            input.bindingNames.map((name) =>
              t.objectProperty(
                t.identifier(name),
                t.identifier(name),
                false,
                true,
              ),
            ),
          ),
        ),
      ),
    ),
  });

  const fnTable: { node: ComptimeFn; captures: string[] }[] = [];
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    if (!segment.instrument) continue;
    const registration = instrumentBody(
      segment.node,
      fnTable,
      input.capturable,
    );
    if (registration) {
      segments.splice(++i, 0, { node: registration });
    }
  }

  // Statements generate individually with tracked line ranges so a thrown
  // error's stack maps back to the source statement for a code frame.
  let code = "";
  let line = 2;
  let sourceEnd = 2;
  const ranges: { start: number; source: t.Node }[] = [];
  for (const segment of segments) {
    const generated = generator(segment.node as any, {
      compact: false,
      sourceMaps: false,
    }).code;
    if (segment.source) {
      ranges.push({ start: line, source: segment.source });
    }
    code += generated + "\n";
    line += countLines(generated) + 1;
    if (segment.source) sourceEnd = line;
  }

  const thunks: ComptimeThunks = {};
  const bindings: { get?: () => Record<string, unknown> } = {};
  const filename = file.opts.filename as string;
  const factory = vm.runInThisContext(
    `(function(${requireId.name}, ${thunksId.name}, ${bindingsId.name}, ${FN_REG_NAME}){"use strict";\n${code}})`,
    { filename: `${filename}?comptime` },
  );

  try {
    guard.run(() =>
      factory(
        (request: string) => loader.requireNamespace(request),
        thunks,
        bindings,
        (
          fn: object,
          index: number,
          getCaptures: () => Record<string, unknown>,
        ) => {
          input.fnRegistry.set(fn, { ...fnTable[index], getCaptures });
          return fn;
        },
      ),
    );
  } catch (err) {
    if (err && typeof err === "object") {
      (err as { comptimeAnchor?: t.Node }).comptimeAnchor ??= anchorFromStack(
        err,
        ranges,
        sourceEnd,
      );
    }
    throw err;
  }

  return {
    thunks,
    getBindings: bindings.get || (() => ({})),
  };
}

// Wraps every function in evaluated comptime code with a `$ctReg(fn, i,
// captureGetter)` registration so its value maps back to source it owns.
// A root-level declaration's registration statement is returned to splice.
function instrumentBody(
  root: t.Node,
  table: { node: ComptimeFn; captures: string[] }[],
  capturable: Set<string>,
): t.Statement | undefined {
  const register = (node: ComptimeFn) => {
    const captures = [...freeNames(node)]
      .filter((name) => capturable.has(name))
      .sort();
    table.push({ node, captures });
    return {
      index: table.length - 1,
      getter: t.arrowFunctionExpression(
        [],
        t.objectExpression(
          captures.map((name) =>
            t.objectProperty(
              t.identifier(name),
              t.identifier(name),
              false,
              true,
            ),
          ),
        ),
      ),
    };
  };

  const regCall = (fn: t.Expression, node: ComptimeFn) => {
    const { index, getter } = register(node);
    return t.callExpression(t.identifier(FN_REG_NAME), [
      fn,
      t.numericLiteral(index),
      getter,
    ]);
  };

  const visitSlot = (parent: any, key: string | number) => {
    const value = parent[key];
    if (!value || typeof value.type !== "string") return;
    walk(value);
    if (
      value.type === "FunctionExpression" ||
      value.type === "ArrowFunctionExpression"
    ) {
      parent[key] = regCall(value, value);
    }
  };

  const walk = (node: t.Node) => {
    for (const key of Object.keys(node)) {
      if (key === "extra" || key === "loc" || key === "start" || key === "end")
        continue;
      const value = (node as any)[key];
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const item = value[i];
          if (item && typeof item.type === "string") {
            if (item.type === "FunctionDeclaration" && item.id) {
              walk(item);
              const { index, getter } = register(item);
              value.splice(
                ++i,
                0,
                t.expressionStatement(
                  t.callExpression(t.identifier(FN_REG_NAME), [
                    t.identifier(item.id.name),
                    t.numericLiteral(index),
                    getter,
                  ]),
                ),
              );
            } else {
              visitSlot(value, i);
            }
          }
        }
      } else {
        visitSlot(node, key);
      }
    }
  };

  walk(root);

  if (
    root.type === "FunctionDeclaration" &&
    (root as ComptimeFn & { id?: t.Identifier | null }).id
  ) {
    const decl = root as t.FunctionDeclaration;
    const { index, getter } = register(decl);
    return t.expressionStatement(
      t.callExpression(t.identifier(FN_REG_NAME), [
        t.identifier(decl.id!.name),
        t.numericLiteral(index),
        getter,
      ]),
    );
  }
}

/** Identifiers referenced by `fn` that no scope within it binds. */
function freeNames(fn: ComptimeFn): Set<string> {
  const free = new Set<string>();
  const clone = t.cloneNode(fn, true) as { type: string };
  if (clone.type === "FunctionDeclaration") clone.type = "FunctionExpression";
  traverse(
    t.file(
      t.program([t.expressionStatement(clone as t.FunctionExpression)]),
      [],
      [],
    ),
    {
      ReferencedIdentifier(identifier: t.NodePath<t.Identifier>) {
        if (!identifier.scope.getBinding(identifier.node.name)) {
          free.add(identifier.node.name);
        }
      },
    },
  );
  return free;
}

function countLines(code: string) {
  let count = 0;
  for (let i = code.indexOf("\n"); i !== -1; i = code.indexOf("\n", i + 1)) {
    count++;
  }
  return count;
}

/** Maps the innermost `?comptime` stack frame back to its source statement. */
function anchorFromStack(
  err: unknown,
  ranges: { start: number; source: t.Node }[],
  sourceEnd: number,
): t.Node | undefined {
  const match = /\?comptime:(\d+):\d+/.exec(
    (err as { stack?: string }).stack || "",
  );
  if (!match) return;
  const line = +match[1];
  if (line >= sourceEnd) return;
  let anchor: t.Node | undefined;
  for (const range of ranges) {
    if (range.start > line) break;
    anchor = range.source;
  }
  return anchor;
}

function buildImportPattern(
  specifiers: (t.ImportSpecifier | t.ImportDefaultSpecifier)[],
) {
  return t.objectPattern(
    specifiers.map((specifier) => {
      const key = t.isImportDefaultSpecifier(specifier)
        ? t.identifier("default")
        : t.isStringLiteral(specifier.imported)
          ? t.stringLiteral(specifier.imported.value)
          : t.identifier(specifier.imported.name);
      return t.objectProperty(
        key,
        t.identifier(specifier.local.name),
        false,
        !t.isStringLiteral(key) &&
          key.name === specifier.local.name &&
          !t.isImportDefaultSpecifier(specifier),
      );
    }),
  );
}
