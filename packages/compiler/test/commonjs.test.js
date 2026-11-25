import assert from "assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import vm from "node:vm";

import { compileSync, types as t } from "@marko/compiler";
import * as translator from "@marko/runtime-tags/translator";

const filename = path.join(import.meta.dirname, "commonjs.marko");
const noBabelrc = {
  babelrc: false,
  configFile: false,
  browserslistConfigFile: false,
};
const compile = (src, config) =>
  compileSync(src, filename, {
    translator,
    cache: new Map(),
    writeVersionComment: false,
    babelConfig: noBabelrc,
    modules: "cjs",
    ...config,
  }).code;
const lines = (...src) => src.join("\n");
// The runtime a template requires, whose every export does nothing.
const runtime = new Proxy(
  { __esModule: true },
  { get: (target, key) => (key in target ? target[key] : () => ({})) },
);

// Runs a template's CommonJS as Node does, `this` its exports, with `modules` to require.
function run(src, modules = {}, { exports = {}, config } = {}) {
  const code = compile(src, config);
  const module = { exports };
  vm.runInThisContext(
    `(function (exports, require, module, __filename, __dirname) {${code}\n})`,
  ).call(
    exports,
    exports,
    (request) => {
      if (request in modules) {
        const value = modules[request];
        return typeof value === "function" && value.load ? value() : value;
      }
      if (/^(@marko\/runtime-tags|marko)\//.test(request)) return runtime;
      throw new Error(`Unexpected require("${request}")`);
    },
    module,
    filename,
    path.dirname(filename),
  );
  return module.exports;
}
// A module whose value `require` computes when first asked, as a circular one is.
const lazy = (load) => Object.assign(() => load(), { load: true });

describe("compiler/commonjs", () => {
  it("runs in strict mode and marks its exports an ES module's", () => {
    const exports = run(
      "export const strict = (function () { return this === undefined; })();\n<div/>",
    );
    assert.equal(exports.strict, true);
    assert.equal(exports.__esModule, true);
  });

  it("reads each import through its module, so it stays live", () => {
    const live = { __esModule: true, value: 1 };
    const exports = run(
      lines(
        `import { value } from "./live.js";`,
        "export function read() { return value; }",
        "<div/>",
      ),
      { "./live.js": live },
    );
    assert.equal(exports.read(), 1);
    live.value = 2;
    assert.equal(exports.read(), 2);
  });

  it("updates an exported `let` or `var` after each write", () => {
    const exports = run(
      lines(
        "export let n = 0;",
        "export var v = 0;",
        "export let s = '';",
        "export let o = 0;",
        "export { n as alias };",
        "export const assign = () => { n = 5; };",
        "export const compound = () => { n += 2; };",
        "export const logical = () => { s ||= 'set'; };",
        "export const prefix = () => ++n;",
        "export const postfix = () => n++;",
        "export const postfixStatement = () => { v++; };",
        "export const destructure = () => { [n, v] = [10, 20]; };",
        "export const destructureValue = () => ({ o } = { o: 7 });",
        "export const forOf = () => { for (v of [1, 2, 3]); };",
        "export const forIn = () => { for (s in { key: 1 }) {} };",
        "export const forOfRedeclared = () => { for (v of [7]) { let v = 2; } };",
        "export const shadowed = (n) => { n = 99; };",
        "<div/>",
      ),
    );
    const descriptor = Object.getOwnPropertyDescriptor(exports, "n");
    assert.deepEqual(descriptor, {
      value: 0,
      writable: true,
      enumerable: true,
      configurable: true,
    });
    exports.assign();
    assert.deepEqual([exports.n, exports.alias], [5, 5]);
    exports.compound();
    assert.equal(exports.n, 7);
    exports.logical();
    assert.equal(exports.s, "set");
    assert.equal(exports.prefix(), 8);
    assert.equal(exports.n, 8);
    assert.equal(exports.postfix(), 8);
    assert.equal(exports.n, 9);
    exports.postfixStatement();
    assert.equal(exports.v, 1);
    exports.destructure();
    assert.deepEqual([exports.n, exports.v], [10, 20]);
    assert.deepEqual(exports.destructureValue(), { o: 7 });
    assert.equal(exports.o, 7);
    exports.forOf();
    assert.equal(exports.v, 3);
    exports.forIn();
    assert.equal(exports.s, "key");
    exports.forOfRedeclared();
    assert.equal(exports.v, 7);
    exports.shadowed(1);
    assert.equal(exports.n, 10);
  });

  it("exports what can't change as plain properties", () => {
    const exports = run(
      lines(
        "export const c = 1;",
        "export function f() {}",
        "static class K {}",
        "export { K, c as alias };",
        "<div/>",
      ),
    );
    for (const name of ["c", "f", "K", "alias", "default"]) {
      const descriptor = Object.getOwnPropertyDescriptor(exports, name);
      assert.ok("value" in descriptor, name);
      assert.equal(descriptor.enumerable, true, name);
    }
    assert.equal(exports.alias, 1);
    assert.equal(typeof exports.K, "function");
  });

  it("keeps an export's comments on what it declares", () => {
    assert.match(
      compile("export const count = 1; // A count.\n<div/>"),
      /^const count = 1; \/\/ A count\.$/m,
    );
  });

  it("exports each declarator before the next one initializes", () => {
    const exports = run(
      lines(
        "static function peek() { return exports.first; }",
        "export const first = 7, seen = peek(), { a } = { a: exports.seen };",
        "<div/>",
      ),
    );
    assert.deepEqual([exports.first, exports.seen, exports.a], [7, 7, 7]);
  });

  it("exports hoisted functions before requiring", () => {
    const exports = {};
    const back = {};
    run(
      lines(
        `import { seen } from "./back.js";`,
        "export function hoisted() { return 'hoisted'; }",
        "export const later = seen;",
        "export let live = 1;",
        "<div/>",
      ),
      {
        "./back.js": lazy(() => {
          back.hoisted = exports.hoisted();
          back.names = Object.keys(exports).sort();
          return { __esModule: true, seen: "seen" };
        }),
      },
      { exports },
    );
    assert.equal(back.hoisted, "hoisted");
    assert.deepEqual(back.names, ["__esModule", "hoisted"]);
    assert.equal(exports.later, "seen");
  });

  it("reads a CommonJS module without `__esModule` as its default", () => {
    const fn = () => "cjs";
    fn.named = "named";
    const esm = { __esModule: true, default: "esm", named: "esm named" };
    const exports = run(
      lines(
        `import cjs from "./cjs.js";`,
        `import * as ns from "./ns.js";`,
        `import both, { named } from "./both.js";`,
        `import esmDefault from "./esm.js";`,
        "export const got = [cjs(), ns.default(), ns.named, both(), named, esmDefault];",
        "<div/>",
      ),
      { "./cjs.js": fn, "./ns.js": fn, "./both.js": fn, "./esm.js": esm },
    );
    assert.deepEqual(exports.got, [
      "cjs",
      "cjs",
      "named",
      "cjs",
      "named",
      "esm",
    ]);
  });

  it("reads a CommonJS module's namespace as Babel's interop did", () => {
    let reads = 0;
    const mod = Object.create({ inherited: "no" });
    mod.plain = "plain";
    Object.defineProperty(mod, "live", {
      enumerable: true,
      get: () => ++reads,
    });
    Object.defineProperty(mod, "boom", {
      enumerable: true,
      get() {
        throw new Error("boom");
      },
    });
    const exports = run(
      lines(
        `import * as ns from "./m.js";`,
        `import * as str from "./str.js";`,
        `import * as nul from "./nul.js";`,
        "export const get = () => [ns, str, nul];",
        "<div/>",
      ),
      { "./m.js": mod, "./str.js": "abc", "./nul.js": null },
    );
    const [ns, str, nul] = exports.get();
    assert.equal(Object.getPrototypeOf(ns), null);
    assert.equal(ns.default, mod);
    assert.equal(ns.plain, "plain");
    assert.deepEqual([ns.live, ns.live], [1, 2]);
    assert.equal("inherited" in ns, false);
    assert.deepEqual([Object.keys(str), str.default], [["default"], "abc"]);
    assert.equal(nul.default, null);
  });

  it("re-exports a module's exports, as copies", () => {
    const all = {
      __esModule: true,
      a: "a",
      b: "theirs",
      f: "theirs",
      l: "theirs",
      default: "theirs",
    };
    const exports = run(
      lines(
        `export * from "./all.js";`,
        `export { a as renamed } from "./all.js";`,
        `export * as ns from "./all.js";`,
        `export const b = "own";`,
        `export function f() { return "own"; }`,
        `export let l = "own";`,
        "<div/>",
      ),
      { "./all.js": all },
    );
    assert.deepEqual(
      [exports.a, exports.renamed, exports.b, exports.f(), exports.l],
      ["a", "a", "own", "own", "own"],
    );
    assert.equal(exports.ns, all);
    assert.notEqual(exports.default, "theirs");
    for (const name of ["a", "renamed", "ns"]) {
      assert.ok(
        "value" in Object.getOwnPropertyDescriptor(exports, name),
        name,
      );
    }
  });

  it("re-exports `export *` where Node's ES module loader sees it", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "marko-cjs-"));
    try {
      fs.writeFileSync(
        path.join(dir, "star.cjs"),
        'exports.__esModule = true; exports.fromStar = "star"; exports.own = "theirs";',
      );
      fs.writeFileSync(
        path.join(dir, "both.cjs"),
        'exports.fromBoth = "both";',
      );
      const code = compile(
        lines(
          `export * from "./star.cjs";`,
          `export * from "./both.cjs";`,
          `import both from "./both.cjs";`,
          "export const own = 'own';",
          "export const gotBoth = both;",
          "<div/>",
        ),
      ).replace(
        /require\("@marko\/runtime-tags\/[^"]*"\)/g,
        "new Proxy({}, { get: () => () => ({}) })",
      );
      fs.writeFileSync(path.join(dir, "template.cjs"), code);
      const ns = await import(
        pathToFileURL(path.join(dir, "template.cjs")).href
      );
      assert.deepEqual(
        [ns.fromStar, ns.fromBoth, ns.own, ns.gotBoth.fromBoth],
        ["star", "both", "own", "both"],
      );
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("re-exports an import", () => {
    const m = { __esModule: true, a: "a", default: "d" };
    const exports = run(
      lines(
        `import d, { a } from "./m.js";`,
        `import * as ns from "./ns.js";`,
        "export { a, a as b, d as c, ns };",
        "<div/>",
      ),
      { "./m.js": m, "./ns.js": m },
    );
    assert.deepEqual(
      [exports.a, exports.b, exports.c, exports.ns],
      ["a", "a", "d", m],
    );
  });

  it("makes only top-level `this` undefined", () => {
    const exports = run(
      lines(
        "export const self = this;",
        "export const arrow = () => this;",
        "export function fn() { return this; }",
        "<div/>",
      ),
    );
    assert.equal(exports.self, undefined);
    assert.equal(exports.arrow(), undefined);
    const obj = {};
    assert.equal(exports.fn.call(obj), obj);
  });

  it("leaves a name an inner scope declares", () => {
    const exports = run(
      lines(
        `import { a } from "./m.js";`,
        "export function param(a) { return a; }",
        "export function block() { { let a = 2; return a; } }",
        "export function hoisted() { if (true) { var a = 3; } return a; }",
        "export const outer = a;",
        "<div/>",
      ),
      { "./m.js": { __esModule: true, a: "import" } },
    );
    assert.deepEqual(
      [exports.param(1), exports.block(), exports.hoisted(), exports.outer],
      [1, 2, 3, "import"],
    );
  });

  it("reads imports in computed keys, writes through rest patterns, and shares a namespace", () => {
    const exports = run(
      lines(
        `import { a } from "./m.js";`,
        `import * as one from "./m.js";`,
        `import * as two from "./m.js";`,
        "export let rest;",
        "export let list;",
        "export const keyed = { [a]: 1 };",
        "export const same = one === two;",
        "export function collect() { ({ ...rest } = { x: 1 }); [...list] = [1, 2]; }",
        "<div/>",
      ),
      { "./m.js": { __esModule: true, a: "k" } },
    );
    exports.collect();
    assert.deepEqual(
      [exports.keyed, exports.same, exports.rest, exports.list],
      [{ k: 1 }, true, { x: 1 }, [1, 2]],
    );
  });

  it("converts tagged templates, named function and class expressions, and loop updates", () => {
    const exports = run(
      lines(
        `import { tag } from "./m.js";`,
        `import w from "./$w.js";`,
        "export let n = 0;",
        "export const s = tag`x`;",
        "export const f = function g() { return typeof g; };",
        "export const C = class {};",
        "export const weird = w;",
        `export { default as d } from "./m.js";`,
        "export function loop() { for (let i = 0; i < 2; n++) i++; try { throw 1; } catch { n += 10; } return n; }",
        "<div/>",
      ),
      {
        "./m.js": {
          __esModule: true,
          tag: (strings) => strings[0],
          default: "dflt",
        },
        "./$w.js": "w",
      },
    );
    assert.deepEqual(
      [exports.s, exports.f(), typeof exports.C, exports.weird, exports.d],
      ["x", "function", "function", "w", "dflt"],
    );
    assert.equal(exports.loop(), 12);
    assert.equal(exports.n, 12);
  });

  it("reads and writes past a declaration whose scope doesn't reach", () => {
    const exports = run(
      lines(
        `import { a } from "./m.js";`,
        "export let n = 0;",
        "export function param(x = a) { const a = 1; return x; }",
        "export function caught() { try { throw {}; } catch ({ x = a }) { let a = 2; return x; } }",
        "export function switched() { switch (a) { case 'A': return 1; default: let a = 0; return a; } }",
        "export function written(x = (n = 5)) { let n; return x; }",
        "<div/>",
      ),
      { "./m.js": { __esModule: true, a: "A" } },
    );
    assert.deepEqual(
      [exports.param(), exports.caught(), exports.switched()],
      ["A", "A", 1],
    );
    exports.written();
    assert.equal(exports.n, 5);
  });

  it("calls an import without its module for `this`", () => {
    const exports = run(
      lines(
        `import { who } from "./m.js";`,
        "export const caller = who();",
        "<div/>",
      ),
      {
        "./m.js": {
          __esModule: true,
          who() {
            return this;
          },
        },
      },
    );
    assert.equal(exports.caller, undefined);
  });

  it("refuses a binding named as CommonJS's own, as a diagnostic", () => {
    for (const src of [
      "static const require = 1;",
      "static function exports() {}",
      "export const module = 1;",
      `import __dirname from "./m.js";`,
      "static if (true) { var exports = 1; }",
      "static if (true) { var __filename = 1; }",
      "export function f(exports) {}",
      "export function g() { let require; }",
    ]) {
      assert.throws(
        () => compile(`${src}\n<div/>`),
        /is CommonJS's own name/,
        src,
      );
      const { meta } = compileSync(`${src}\n<div/>`, filename, {
        translator,
        cache: new Map(),
        babelConfig: noBabelrc,
        modules: "cjs",
        errorRecovery: true,
      });
      assert.ok(
        meta.diagnostics.some(
          (d) => d.type === "error" && /is CommonJS's own name/.test(d.label),
        ),
        src,
      );
    }
    // The output reads no binding of these names below the top level.
    assert.equal(
      run(
        "export const f = (module, __dirname) => module + __dirname;\n<div/>",
      ).f(1, 2),
      3,
    );
  });

  it("refuses what a module can't convert, as a diagnostic", () => {
    const diagnostics = (src) =>
      compileSync(`${src}\n<div/>`, filename, {
        translator,
        cache: new Map(),
        babelConfig: noBabelrc,
        modules: "cjs",
        errorRecovery: true,
      }).meta.diagnostics.map((d) => d.label);
    for (const [src, label] of [
      [
        `import { n } from "./m.js";\nstatic function f() { n++; }`,
        /"n" is an import/,
      ],
      [
        `import * as ns from "./m.js";\nstatic function f() { ns = 1; }`,
        /"ns" is an import/,
      ],
      [
        `import { n } from "./m.js";\nstatic function f() { [n] = [1]; }`,
        /"n" is an import/,
      ],
      [
        `static const flag = false;\nexport { flag as "__esModule" };`,
        /"__esModule" marks/,
      ],
      [`export const __esModule = 1;`, /"__esModule" marks/],
      [`export { a as __esModule } from "./m.js";`, /"__esModule" marks/],
    ]) {
      assert.throws(() => compile(`${src}\n<div/>`), label, src);
      assert.ok(
        diagnostics(src).some((d) => label.test(d)),
        src,
      );
    }
    // A local binding of an import's name is the local's to assign.
    assert.equal(
      run(
        lines(
          `import { n } from "./m.js";`,
          "export function f(n) { n++; return n; }",
          "export function g() { var n; n = 2; return n; }",
          "<div/>",
        ),
        { "./m.js": { __esModule: true, n: 1 } },
      ).f(1),
      2,
    );
  });

  it("names each source apart, numeric names too", () => {
    const esm = (value) => ({ __esModule: true, value });
    const exports = run(
      lines(
        `import { value as a } from "./14.js";`,
        `import { value as b } from "./04.js";`,
        `import { value as c } from "./142.js";`,
        "export const got = [a, b, c];",
        "<div/>",
      ),
      { "./14.js": esm("a"), "./04.js": esm("b"), "./142.js": esm("c") },
    );
    assert.deepEqual(exports.got, ["a", "b", "c"]);
  });

  it("names a source past a top-level binding of its name", () => {
    const exports = run(
      lines(
        `import { value } from "./value.js";`,
        `export const $value = "own";`,
        "export const got = [$value, value];",
        "<div/>",
      ),
      { "./value.js": { __esModule: true, value: "imported" } },
    );
    assert.deepEqual(exports.got, ["own", "imported"]);
  });

  it("reads an import by a string name", () => {
    const exports = run(
      lines(
        `import { "a-b" as ab } from "./m.js";`,
        "export const got = ab;",
        "<div/>",
      ),
      { "./m.js": { __esModule: true, "a-b": "ab" } },
    );
    assert.equal(exports.got, "ab");
  });

  it("reads and re-exports an import named by an empty string", () => {
    const exports = run(
      lines(
        `import { "" as x } from "./m.js";`,
        `export { "" as y } from "./m.js";`,
        "export const got = x;",
        "<div/>",
      ),
      { "./m.js": { __esModule: true, "": "empty" } },
    );
    assert.deepEqual([exports.got, exports.y], ["empty", "empty"]);
  });

  it("writes no shorthand property whose import it reads", () => {
    const shorthands = [];
    t.traverseFast(
      compileSync(
        lines(
          `import { x } from "./m.js";`,
          "export const o = { x };",
          "<div/>",
        ),
        filename,
        {
          translator,
          babelConfig: noBabelrc,
          modules: "cjs",
          ast: true,
          code: false,
        },
      ).ast,
      (node) => {
        if (node.type === "ObjectProperty" && node.shorthand)
          shorthands.push(node);
      },
    );
    assert.deepEqual(shorthands, []);
  });

  it("exports a default read from an import or `this`", () => {
    // A project's Babel plugin, which runs first, may write either.
    const exportDefault = (value) => ({
      visitor: {
        ExportDefaultDeclaration(path) {
          path.node.declaration = value();
        },
      },
    });
    const exports = run(
      lines(`import { x } from "./m.js";`, "<div/>"),
      { "./m.js": { __esModule: true, x: "x" } },
      {
        config: {
          babelConfig: {
            ...noBabelrc,
            plugins: [exportDefault(() => t.identifier("x"))],
          },
        },
      },
    );
    assert.equal(exports.default, "x");
    const self = run(
      "<div/>",
      {},
      {
        config: {
          babelConfig: {
            ...noBabelrc,
            plugins: [exportDefault(() => t.thisExpression())],
          },
        },
      },
    );
    assert.equal(self.default, undefined);
  });

  it("converts after a project's Babel plugins, which see an ES module", () => {
    let seen;
    const plugin = {
      visitor: {
        Program: {
          exit(program) {
            seen = program.node.body.some(
              (n) => n.type === "ImportDeclaration",
            );
          },
        },
      },
    };
    const exports = run(
      lines(`import { x } from "./m.js";`, "export const got = x;", "<div/>"),
      { "./m.js": { __esModule: true, x: "x" } },
      { config: { babelConfig: { ...noBabelrc, plugins: [plugin] } } },
    );
    assert.equal(seen, true);
    assert.equal(exports.got, "x");
  });

  it("refuses to keep types in CommonJS output", () => {
    assert.throws(
      () =>
        compile("static const x: number = 1;\n<div/>", { stripTypes: false }),
      /CommonJS output .* can't keep TypeScript/,
    );
  });
});
