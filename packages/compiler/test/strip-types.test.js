import assert from "assert/strict";
import { createRequire } from "node:module";
import path from "node:path";
import vm from "node:vm";

import { compileSync, types } from "@marko/compiler";
import * as translator from "@marko/runtime-tags/translator";
import * as classTranslator from "marko/translator";

const template = path.join(
  import.meta.dirname,
  "fixtures",
  "register",
  "template.marko",
);
const babelConfig = { babelrc: false, configFile: false };
const compile = (src, config, tr = translator) =>
  compileSync(src, template, {
    translator: tr,
    babelConfig,
    cache: new Map(),
    ...config,
  });
const print = (src, tr) =>
  compile(src, { output: "source", stripTypes: true }, tr).code;
// Runs a template's server module, giving its exports.
const load = (src, tr) => {
  const module = { exports: {} };
  new Function(
    "module",
    "exports",
    "require",
    compile(src, { output: "html", modules: "cjs" }, tr).code,
  )(module, module.exports, createRequire(template));
  return module.exports;
};
// The nodes of a template's stripped source a test picks.
const nodesOf = (src, pick) => {
  const nodes = [];
  types.traverseFast(
    compile(src, { output: "source", stripTypes: true, ast: true, code: false })
      .ast,
    (node) => {
      if (pick(node)) nodes.push(node);
    },
  );
  return nodes;
};
const enumOf = (members, tr) => ({
  ...load(`export enum E { ${members} }`, tr).E,
});

describe("stripTypes", () => {
  it("strips as", () => {
    assert.equal(
      print("static const a = input as unknown as string;"),
      "static const a = input;",
    );
  });

  it("strips satisfies", () => {
    assert.equal(
      print("static const b = input satisfies object;"),
      "static const b = input;",
    );
  });

  it("strips type assertions", () => {
    assert.equal(
      print("static const c = <number>input.y;"),
      "static const c = input.y;",
    );
  });

  it("strips non-null assertions", () => {
    assert.equal(
      print("static const d = input.x!.y!;"),
      "static const d = input.x.y;",
    );
  });

  it("strips instantiation expressions", () => {
    assert.equal(
      print("static const e = make<string>;"),
      "static const e = make;",
    );
  });

  it("strips interfaces", () => {
    assert.equal(
      print("static interface I { a: string }\nstatic const v = 1;"),
      "static const v = 1;",
    );
  });

  it("strips type aliases", () => {
    assert.equal(
      print("static type A = string;\nstatic const v = 1;"),
      "static const v = 1;",
    );
  });

  it("strips overloads and declare functions", () => {
    assert.equal(
      print(
        "static function o(a: string): void;\nstatic function o(a: any) {}\nstatic declare function h(): void;",
      ),
      "static function o(a) {}",
    );
  });

  it("strips method overloads and abstract methods", () => {
    assert.equal(
      print(
        "static abstract class M {\n  m(a: string): void;\n  m(a: any) {}\n  abstract n(): void;\n}",
      ),
      "static class M {\n  m(a) {}\n}",
    );
  });

  it("strips exported overloads", () => {
    assert.equal(
      print(
        "export function o(a: string): void;\nexport function o(a: any) {}\n<div/>",
      ),
      "export function o(a) {}\n<div/>",
    );
  });

  it("strips local exports of types alone", () => {
    assert.equal(
      print("static type T = string;\nexport { T };\n<div/>"),
      "<div/>",
    );
  });

  it("strips local exports of overloaded functions", () => {
    assert.equal(
      print(
        "static function o(a: string): void;\nstatic function o(a: any) {}\nexport { o };\n<div/>",
      ),
      "static function o(a) {}\nexport { o };\n<div/>",
    );
  });

  it("strips index signatures", () => {
    assert.equal(
      print("static class S {\n  [k: string]: any;\n  a = 1;\n}"),
      "static class S {\n  a = 1;\n}",
    );
  });

  it("strips declared and type-only namespaces", () => {
    assert.equal(
      print(
        'static declare namespace N { const x: number }\nstatic namespace T { export type A = 1; export interface I {} export declare function f(): void; }\nstatic declare module "m" {}\nstatic declare global {}\nstatic const v = 1;',
      ),
      "static const v = 1;",
    );
  });

  it("strips declare enums", () => {
    assert.equal(
      print("static declare enum D { Y }\nstatic const v = 1;"),
      "static const v = 1;",
    );
  });

  it("strips type imports", () => {
    assert.equal(
      print(
        'import type { A } from "./a";\nimport { type B, c } from "./b";\nimport { type D } from "./d";\nstatic import { type E } from "./e";\n<div>${c}</div>',
      ),
      'import { c } from "./b";\nimport "./d";\nstatic import "./e";\n<div>\n  ${c}\n</div>',
    );
  });

  it("strips type exports", () => {
    assert.equal(
      print(
        'export type B = number;\nexport type { C } from "./c";\nexport { type D, e } from "./x";\nexport { type F } from "./f";\n<div/>',
      ),
      'export { e } from "./x";\n<div/>',
    );
  });

  it("strips local exports of types", () => {
    assert.equal(
      print(
        'import type { A } from "./a";\nimport { type B } from "./b";\nstatic type T = string;\nstatic interface I {}\nstatic declare const z: number;\nstatic declare class D {}\nstatic declare namespace N {}\nstatic declare enum DE { Y }\nexport type U = number;\nstatic const v = 1;\nexport { A, B, T, I, z, D, N, DE, U, v };\n<div/>',
      ),
      'import "./b";\nstatic const v = 1;\nexport { v };\n<div/>',
    );
  });

  it("strips type export-alls", () => {
    assert.equal(
      print('export type * from "./y";\nexport * from "./z";\n<div/>'),
      'export * from "./z";\n<div/>',
    );
  });

  it("strips declare variables", () => {
    assert.equal(
      print(
        "static declare const z: number;\nexport declare let w: string;\nstatic const v = 1;",
      ),
      "static const v = 1;",
    );
  });

  it("strips definite assignment", () => {
    assert.equal(print("static let x!: number;"), "static let x;");
  });

  it("strips declare classes and class heads", () => {
    assert.equal(
      print(
        "static declare class D {}\nstatic abstract class K<T> extends B<T> implements I, J<T> {}\nstatic const C = class<T> implements I {};",
      ),
      "static class K extends B {}\nstatic const C = class {};",
    );
  });

  it("strips class fields", () => {
    assert.equal(
      print(
        'static class F extends Base {\n  declare a: string;\n  private c: string = "";\n  readonly d = 1;\n  protected e?: string;\n  static f!: number;\n  override g = 1;\n  #h: number = 1;\n}\nstatic abstract class G {\n  abstract i: string;\n}',
      ),
      'static class F extends Base {\n  c = "";\n  d = 1;\n  e;\n  static f;\n  g = 1;\n  #h = 1;\n}\nstatic class G {}',
    );
  });

  it("strips class methods", () => {
    assert.equal(
      print(
        "static class P extends Q {\n  public m?(): void {}\n  protected override n(): void {}\n  private static o<T>(a: T): T { return a; }\n  #p(a: string): void {}\n}",
      ),
      "static class P extends Q {\n  m() {}\n  n() {}\n  static o(a) {\n    return a;\n  }\n  #p(a) {}\n}",
    );
  });

  it("strips functions", () => {
    assert.equal(
      print(
        "static function f<T>(this: Window, a: T, b?: string): T { return a; }\nstatic const g = <T,>(x: T): void => {};\nstatic const o = { m<T>(z: T): T { return z; } };\nstatic const h = function (this: Window) {};",
      ),
      "static function f(a, b) {\n  return a;\n}\nstatic const g = x => {};\nstatic const o = {\n  m(z) {\n    return z;\n  }\n};\nstatic const h = function () {};",
    );
  });

  it("strips parameters and patterns", () => {
    assert.equal(
      print(
        "static function p({ a }: { a: string }, [b]: number[], c: number = 1, ...d: string[]) {}\nstatic const [, y]: number[] = input.list;",
      ),
      "static function p({\n  a\n}, [b], c = 1, ...d) {}\nstatic const [, y] = input.list;",
    );
  });

  it("strips tag variables and parameters", () => {
    assert.equal(
      print(
        "<let/x: number = 1>\n<for|item: string, i: number| of=input.list>${item}</for>",
      ),
      "<let/x=1/>\n<for|item, i| of=input.list>\n  ${item}\n</for>",
    );
  });

  it("strips call type arguments", () => {
    assert.equal(
      print(
        "static const a = f<string>(1);\nstatic const b = input?.g<number>();\nstatic const c = new Map<string, number>();\nstatic const d = tag<string>`x`;",
      ),
      "static const a = f(1);\nstatic const b = input?.g();\nstatic const c = new Map();\nstatic const d = tag`x`;",
    );
  });

  it("strips tag type arguments and parameters", () => {
    assert.equal(
      print("<foo<string> <T>|x: T|>${x}</foo>"),
      "<foo|x|>\n  ${x}\n</foo>",
    );
  });

  it("strips comments on stripped expressions", () => {
    assert.equal(
      print(
        "static const a = /*@__PURE__*/ (create() as Foo);\nstatic const b = (input /* kept */ as string);",
      ),
      "static const a = /*@__PURE__*/create();\nstatic const b = input /* kept */;",
    );
  });

  it("strips statements stripping empties", () => {
    assert.equal(
      print(
        'static type A = string;\nserver import type H from "./h";\n<div/>',
      ),
      "<div/>",
    );
  });

  it("strips an empty export as written", () => {
    assert.equal(print("export {};\n<div/>"), "<div/>");
  });

  it("keeps an empty export from a module, which loads it", () => {
    assert.equal(
      print(
        'export {} from "./setup.js";\nexport { type T } from "./t.js";\n<div/>',
      ),
      'export {} from "./setup.js";\n<div/>',
    );
  });

  it("keeps a local export of a `var` a statement's block declares", () => {
    assert.equal(
      print(
        'static import { T } from "./t.js";\nstatic function f() { type T = 1; }\nexport { T };\n<div/>',
      ),
      'static import { T } from "./t.js";\nstatic function f() {}\nexport { T };\n<div/>',
    );
    assert.equal(
      print(
        "static type T = number;\nstatic if (true) { var T = 7; }\nexport { T };\n<div/>",
      ),
      "static if (true) {\n  var T = 7;\n}\nexport { T };\n<div/>",
    );
  });

  it("strips a statement's local export of types alone", () => {
    assert.equal(
      print(
        "static type T = 1;\nstatic const v = 1;\nstatic export { T, v };\n<div/>",
      ),
      "static const v = 1;\nstatic export { v };\n<div/>",
    );
    assert.equal(
      print("static type T = 1;\nstatic export { T };\n<div/>"),
      "<div/>",
    );
  });

  it("leaves an export inside a statement alone", () => {
    assert.match(
      compile(
        "static type T = 1;\nstatic export { T };\n<div>a</div>\n<span>last</span>",
        { output: "html" },
      ).code,
      /<span>last<\/span>/,
    );
  });

  it("strips export as namespace", () => {
    assert.equal(print("export as namespace Lib;\n<div/>"), "<div/>");
  });

  it("keeps a local export of a value a type import shares a name with", () => {
    assert.equal(
      print(
        'import type { T } from "./a";\nstatic const T = 1;\nexport { T };\n<div/>',
      ),
      "static const T = 1;\nexport { T };\n<div/>",
    );
    assert.equal(
      print("static declare function f(): void;\nexport { f };\n<div/>"),
      "<div/>",
    );
  });

  it("empties a statement's slot a type declaration held", () => {
    assert.equal(
      print(
        "static if (a) foo(); else type T = 1;\nstatic while (b) interface I {}",
      ),
      "static if (a) foo();\nstatic while (b);",
    );
  });

  it("keeps a local export of a name that is a value too", () => {
    assert.equal(
      print("static type T = 1;\nstatic const T = 2;\nexport { T };\n<div/>"),
      "static const T = 2;\nexport { T };\n<div/>",
    );
  });

  describe("enums", () => {
    it("compiles each to an object, pure when every member is constant", () => {
      assert.equal(
        print(
          'static enum E { A, S = "s", B = Math.max(1, 2) }\nstatic enum P { X }',
        ),
        'static var E = (E => {\n  E[E["A"] = 0] = "A";\n  E["S"] = "s";\n  E[E["B"] = Math.max(1, 2)] = "B";\n  return E;\n})({});\nstatic var P = /*#__PURE__*/(P => {\n  P[P["X"] = 0] = "X";\n  return P;\n})({});',
      );
    });

    it("numbers members from 0, mapping each value back to its name", () => {
      assert.deepEqual(enumOf("A, B, C"), {
        A: 0,
        B: 1,
        C: 2,
        0: "A",
        1: "B",
        2: "C",
      });
    });

    it("numbers on from a member's initializer", () => {
      assert.deepEqual(enumOf("A = 5, B, C = 10, D"), {
        A: 5,
        B: 6,
        C: 10,
        D: 11,
        5: "A",
        6: "B",
        10: "C",
        11: "D",
      });
    });

    it("maps no string member back", () => {
      assert.deepEqual(enumOf('S = "s", T = `t`, U = `u${1}`'), {
        S: "s",
        T: "t",
        U: "u1",
      });
    });

    it("evaluates constant initializers", () => {
      const e = enumOf(
        'A = 1 << 2, B = -1, C = ~0, D = (2 + 3) * 2, F = 2 ** 3, G = "x" + "y"',
      );
      assert.deepEqual(
        [e.A, e.B, e.C, e.D, e.F, e.G, e[4], e[-1]],
        [4, -1, -1, 10, 8, "xy", "A", "C"],
      );
    });

    it("reads earlier members in initializers", () => {
      const e = enumOf('A = 1, B = A * 2, C = E.B + 1, D = E["C"] + 1');
      assert.deepEqual([e.A, e.B, e.C, e.D, e[4]], [1, 2, 3, 4, "D"]);
    });

    it("reports a member after a string one without an initializer", () => {
      assert.throws(
        () =>
          compile('static enum E { A = "a", B }\n<div/>', { output: "html" }),
        /Enum member "B" follows a string member/,
      );
    });

    it("folds each operator TypeScript folds, and nothing else", () => {
      assert.equal(
        print(
          'static enum E { A = +1, B = -1, C = ~1, D = 7 - 2, F = 2 * 3, G = 7 / 2, H = 7 % 4, I = 2 ** 3, J = 1 << 3, K = -16 >> 2, L = -1 >>> 28, M = 6 & 3, N = 6 | 1, O = 6 ^ 3, P = "a" + 1 }',
        ),
        [
          "static var E = /*#__PURE__*/(E => {",
          '  E[E["A"] = 1] = "A";',
          '  E[E["B"] = -1] = "B";',
          '  E[E["C"] = -2] = "C";',
          '  E[E["D"] = 5] = "D";',
          '  E[E["F"] = 6] = "F";',
          '  E[E["G"] = 3.5] = "G";',
          '  E[E["H"] = 3] = "H";',
          '  E[E["I"] = 8] = "I";',
          '  E[E["J"] = 8] = "J";',
          '  E[E["K"] = -4] = "K";',
          '  E[E["L"] = 15] = "L";',
          '  E[E["M"] = 2] = "M";',
          '  E[E["N"] = 7] = "N";',
          '  E[E["O"] = 5] = "O";',
          '  E["P"] = "a1";',
          "  return E;",
          "})({});",
        ].join("\n"),
      );
      assert.equal(
        print('static enum F { A = "a" - 1, B = -"1" }'),
        [
          "static var F = (F => {",
          '  F[F["A"] = "a" - 1] = "A";',
          '  F[F["B"] = -"1"] = "B";',
          "  return F;",
          "})({});",
        ].join("\n"),
      );
    });

    it("reads no member a function or class names for itself", () => {
      const e = enumOf(
        "A = 1, B = [5].map((A) => A)[0], C = (class A {}).name.length",
      );
      assert.deepEqual([e.B, e.C], [5, 1]);
    });

    it("reads no member a function declares deeper in its body", () => {
      const e = enumOf(
        [
          "A = 1",
          "B = (() => { if (true) { var A = 5; } return A; })()",
          "C = (() => { for (const A of [7]) return A; })()",
          "D = (() => { try { throw 9; } catch (A) { return A; } })()",
          "F = (() => { switch (1) { case 1: var A = 11; } return A; })()",
          "G = (() => { while (true) { var A = 13; break; } return A; })()",
          "H = (() => { try { var A = 15; } finally {} return A; })()",
          "I = (() => { l: { var A = 17; } return A; })()",
        ].join(", "),
      );
      assert.deepEqual(
        [e.B, e.C, e.D, e.F, e.G, e.H, e.I],
        [5, 7, 9, 11, 13, 15, 17],
      );
    });

    it("reads a member named for its enum", () => {
      assert.deepEqual(enumOf("E = 1, F = E + 1"), {
        E: 1,
        F: 2,
        1: "E",
        2: "F",
      });
    });

    it("computes the rest at runtime, numbering on from them", () => {
      const e = enumOf("A = 2, B = Math.max(A, 3), C");
      assert.deepEqual([e.B, e.C, e[3], e[4]], [3, 4, "B", "C"]);
    });

    it("merges declarations of one enum, exported or not", () => {
      assert.deepEqual(
        { ...load("export enum E { A }\nstatic enum E { B = 1 }").E },
        { A: 0, B: 1, 0: "A", 1: "B" },
      );
      assert.deepEqual(
        {
          ...load("static enum M { A }\nstatic enum M { B = 1 }\nexport { M };")
            .M,
        },
        { A: 0, B: 1, 0: "A", 1: "B" },
      );
    });

    it("exports an enum declared twice once", () => {
      const src = "export enum E { A }\nexport enum E { B = 1 }";
      // A module exporting a name twice fails to parse.
      new vm.SourceTextModule(compile(src, { output: "html" }).code);
      assert.deepEqual({ ...load(src).E }, { A: 0, B: 1, 0: "A", 1: "B" });
    });

    it("reads members through type assertions", () => {
      const e = enumOf(
        "A = 1, B = A as number, C = A!, D = <number>A, F = A satisfies number",
      );
      assert.deepEqual([e.B, e.C, e.D, e.F], [1, 1, 1, 1]);
    });

    it("maps no member back that is a string by syntax, constant or not", () => {
      assert.deepEqual(
        {
          ...load(
            'static const P = "evo-";\nexport enum E { Root = P + "root" }',
          ).E,
        },
        { Root: "evo-root" },
      );
      assert.deepEqual(
        { ...load('export enum S { X = "x" }\nexport enum E { A = S.X }').E },
        { A: "x" },
      );
      assert.deepEqual(enumOf('A = "a", B = `${A}b`, C = B + "c"'), {
        A: "a",
        B: "ab",
        C: "abc",
      });
    });

    it("reads earlier declarations' members by name", () => {
      assert.equal(
        load(
          "static function f() { enum E { A = 1 } enum E { B = A + 1 } return E.B; }\nexport { f };",
        ).f(),
        2,
      );
      assert.deepEqual(
        { ...load("export enum E { A = 1 }\nexport enum E { B = A + 1 }").E },
        { A: 1, B: 2, 1: "A", 2: "B" },
      );
    });

    it("reads members inside functions in an initializer", () => {
      assert.equal(enumOf("A = 2, B = [1].map((x) => x + A)[0]").B, 3);
    });

    it("scopes an enum to its block", () => {
      assert.equal(
        load(
          "static function f() {\n  const objs: any[] = [];\n  for (let i = 0; i < 2; i++) { enum L { A = i } objs.push(L); }\n  return [objs[0] === objs[1], objs[0].A, objs[1].A].join();\n}\nexport { f };",
        ).f(),
        "false,0,1",
      );
      assert.equal(
        load(
          "static function f() {\n  const Mode = 5;\n  { enum Mode { A = 1 } return Mode.A; }\n}\nexport { f };",
        ).f(),
        1,
      );
    });

    it("keeps an export of an enum that shares its name with a type", () => {
      assert.deepEqual(
        {
          ...load(
            "static enum N { A = 1 }\nstatic namespace N { export type X = number }\nexport { N };",
          ).N,
        },
        { A: 1, 1: "A" },
      );
    });

    it("folds constant strings, templates and unary operators", () => {
      assert.equal(
        print(
          'static enum E { A = "a", B = A + "b", C = `c`, D = -1, F = ~0 }',
        ),
        'static var E = /*#__PURE__*/(E => {\n  E["A"] = "a";\n  E["B"] = "ab";\n  E["C"] = "c";\n  E[E["D"] = -1] = "D";\n  E[E["F"] = -1] = "F";\n  return E;\n})({});',
      );
    });

    it("declares an enum anew in each block", () => {
      assert.equal(
        load(
          "static function f() {\n  { enum L { A = 1 } }\n  { enum L { B = 2 } return L.B; }\n}\nexport { f };",
        ).f(),
        2,
      );
    });

    it("reads string members of enums in outer scopes", () => {
      assert.deepEqual(
        {
          ...load("export enum S { X = `${1}x` }\nexport enum E { A = S.X }").E,
        },
        { A: "1x" },
      );
      assert.deepEqual(
        load(
          'static function f() {\n  enum S { X = "x" }\n  { enum E { A = S.X } return Object.keys(E); }\n}\nexport { f };',
        ).f(),
        ["A"],
      );
    });

    it("reads no member a function body declares", () => {
      assert.equal(
        enumOf("A = 1, B = (() => { const A = 5; return A; })()").B,
        5,
      );
    });

    it("reads a module const a member names, as string or constant", () => {
      assert.deepEqual(
        {
          ...load(
            'static const P = "p";\nstatic const Q = `${P}q`;\nexport enum E { A = P, B = Q }',
          ).E,
        },
        { A: "p", B: "pq" },
      );
      assert.match(
        print('static const P = "p";\nstatic enum E { A = P }'),
        /E\["A"\] = "p";/,
      );
    });

    it("reads no module const a function's own shadows", () => {
      assert.equal(
        load(
          'static const P = "p";\nstatic function f() { const P = 1; enum E { A = P } return E.A; }\nexport { f };',
        ).f(),
        1,
      );
    });

    it("compiles an exported const enum to a plain object", () => {
      assert.equal(
        print('export const enum K { P = 1, "q-r" = P + 1 }\n<div/>'),
        'export var K = {\n  P: 1,\n  "q-r": 2\n};\n<div/>',
      );
      assert.deepEqual(
        load(
          'static const enum C { X = 1 }\nstatic const enum C { Y = "y" }\nexport { C };',
        ).C,
        { X: 1, Y: "y" },
      );
    });

    describe("inlining", () => {
      it("inlines in anonymous functions and classes, and around constructors", () => {
        const out = print(
          "static enum E { A = 1 }\nstatic const f = function () { return E.A; };\nstatic const C = class { m() { return E.A; } };\nstatic class P { constructor(public a: number, b: number) { this.b = E.A + b; } }\nstatic class Q { constructor(b: number) { this.b = E.A + b; } }\n<div/>",
        );
        assert.equal(out.match(/return 1;/g)?.length, 2);
        assert.match(
          out,
          /constructor\(a, b\) \{\n {4}this\.a = a;\n {4}this\.b = 1 \+ b;/,
        );
        assert.match(out, /constructor\(b\) \{\n {4}this\.b = 1 \+ b;/);
      });

      it("inlines past a namespace of types alone of its name", () => {
        assert.equal(
          print(
            "static namespace E { export type T = number; }\nexport const result = E.A;\nstatic const enum E { A = 1 }\n<div/>",
          ),
          "export const result = 1;\n<div/>",
        );
      });

      it("inlines no member a `var` in another target's block shadows", () => {
        assert.match(
          print(
            "server const enum E { A = 1 }\nclient if (true) { var E = { A: 5 }; }\n<div>${E.A}</div>",
          ),
          /<div>\n {2}\$\{E\.A\}\n<\/div>/,
        );
      });

      it("reads no member in `import.meta`", () => {
        assert.match(
          print(
            'export enum E { "import" = 1, Url = import.meta.url }\n<div/>',
          ),
          /E\["Url"\] = import\.meta\.url/,
        );
      });

      it("inlines no member a root tag variable shadows", () => {
        assert.match(
          print(
            "static enum E { A = 1 }\n<let/E={ A: 5 }/>\n<div>${E.A}</div>",
          ),
          /<div>\n {2}\$\{E\.A\}\n<\/div>/,
        );
      });

      it("inlines constant member reads of regular and const enums", () => {
        assert.match(
          print(
            'static enum E { A, S = "s", D = Math.max(1, 2) }\nstatic const enum C { X = 3, Y = X * 2 }\nstatic const r = [E.A, E["S"], E.D, C.X, C["Y"], E.S.length, E!.A, (E as any).A];',
          ),
          /\nstatic const r = \[0, "s", E\.D, 3, 6, "s"\.length, 0, 0\];$/,
        );
      });

      it("removes a local const enum once its reads are inlined", () => {
        assert.equal(
          print("static const enum C { X = 3 }\nstatic const r = C.X;"),
          "static const r = 3;",
        );
        assert.equal(
          print("static function f() { const enum L { A = 1 } return L.A; }"),
          "static function f() {\n  return 1;\n}",
        );
      });

      it("keeps a regular enum's object for dynamic uses", () => {
        assert.deepEqual(
          load(
            'export enum E { A, B }\nstatic const key = "B";\nexport const R = [E[key], E[0], Object.keys(E).length, typeof E];',
          ).R,
          [1, "A", 4, "object"],
        );
      });

      it("leaves members a declaration hides, and members written or called", () => {
        const src = [
          "static enum E { A = 1, f = 2 }",
          "static function p(E: any) { return E.A; }",
          "static function v() { if (true) { var E: any; } return E.A; }",
          "static function b() { { const E = { A: 0 }; return E.A; } }",
          "static function c() { try {} catch (E: any) { return E.A; } }",
          "static function l() { for (const E of [{ A: 0 }]) return E.A; }",
          "static function s() { switch (1) { case 1: let E: any; return E.A; } }",
          "static function o() { for (let E: any = 0; ; ) return E.A; }",
          "static class B { static { const E: any = 0; B.x = E.A; } static x: any; }",
          "static function g() { enum L { A = 1 } function h(L: any) { return L.A; } return h; }",
          "static const k = class E { m() { return E.A; } };",
          "static const n = function E() { return E.A; };",
          "static function w() { E.A = 1; E.A++; delete E.A; [E.A] = [1]; ({ a: E.A } = {}); for (E.A of []); [E.f = 1, ...E.A] = []; E.f``; new E.f(); E.f?.(); return E.f(); }",
          "<div><let/E={ A: 0 }/>${E.A}</div>",
          "<for|E| of=[{ A: 0 }]>${E.A}</for>",
          "<div>${E.A}</div>",
        ].join("\n");
        assert.deepEqual(
          print(src)
            .split("\n")
            .filter((line) => /E\.A|E\.f|L\.A|\$\{1\}/.test(line))
            .map((line) => line.trim()),
          [
            "return E.A;",
            "return E.A;",
            "return E.A;",
            "return E.A;",
            "}]) return E.A;",
            "return E.A;",
            "for (let E = 0;;) return E.A;",
            "B.x = E.A;",
            "return L.A;",
            "return E.A;",
            "return E.A;",
            "E.A = 1;",
            "E.A++;",
            "delete E.A;",
            "[E.A] = [1];",
            "a: E.A",
            "for (E.A of []);",
            "[E.f = 1, ...E.A] = [];",
            "E.f``;",
            "new E.f();",
            "E.f?.();",
            "return E.f();",
            "${E.A}",
            "${E.A}",
            "${1}",
          ],
        );
      });

      it("leaves members a namespace's declaration hides", () => {
        assert.equal(
          load(
            "static enum E { A = 1 }\nstatic namespace N { const E = { A: 0 }; export const a = E.A; }\nexport const R = N.a;",
          ).R,
          0,
        );
      });

      it("leaves members a class API statement in a tag's body hides", () => {
        assert.match(
          print(
            "static enum E { A = 1 }\n<div>\n$ const E = { A: 0 };\n${E.A}\n</div>\n<span>${E.A}</span>",
            classTranslator,
          ),
          /\$\{E\.A\}[\s\S]*\$\{1\}/,
        );
      });

      it("inlines reads before the module's enum", () => {
        assert.equal(
          print(
            "static function f() { return E.A + C.B; }\n<div>${E.A}</div>\nstatic enum E { A = 1 }\nstatic const enum C { B = 2 }",
          ),
          'static function f() {\n  return 1 + 2;\n}\n<div>\n  ${1}\n</div>\nstatic var E = /*#__PURE__*/(E => {\n  E[E["A"] = 1] = "A";\n  return E;\n})({});',
        );
      });

      it("inlines a template statement's const enum through the template", async () => {
        assert.equal(
          String(
            await load(
              "$ const enum C { X = 5 }\n<div>${C.X}</div>",
              classTranslator,
            ).default.renderToString({}),
          ),
          "<div>5</div>",
        );
      });

      it("adds a module enum to a namespace of its name before it", () => {
        assert.deepEqual(
          load(
            "static namespace E { export const x = 1; }\nstatic enum E { A = 2 }\nexport const R = [E.x, E.A];",
          ).R,
          [1, 2],
        );
      });

      it("keeps the comments of a member it inlines", () => {
        assert.equal(
          print("static enum E { A }\nstatic const c = /* c */ E.A;")
            .split("\n")
            .pop(),
          "static const c = /* c */0;",
        );
      });

      it("keeps a const enum whose member didn't fold, or whose read stays", async () => {
        assert.equal(
          load(
            "static function f() { const P = 2; const enum E { A = P } return E.A; }\nexport { f };",
          ).f(),
          2,
        );
        assert.equal(
          load(
            "static function f() { function g() { return K.X; } const enum K { X = 5 } return g(); }\nexport { f };",
          ).f(),
          5,
        );
        assert.deepEqual(
          load(
            'static const enum C { X = 1 }\nstatic const k = "X";\nexport const R = [C.X, (C as any)[k]];',
          ).R,
          [1, 1],
        );
        assert.equal(
          String(
            await load(
              'static const enum T { Div = "div" }\n<${T.Div} class="x">hi</>',
            ).default.render({}),
          ),
          "<div class=x>hi</div>",
        );
      });

      it("folds a template of constant members", () => {
        assert.equal(
          print(
            'static const enum E { A = "a", B = `${A}x${1}` }\nstatic const r = E.B;',
          ),
          'static const r = "ax1";',
        );
      });

      it("leaves a member naming a tag", async () => {
        assert.equal(
          String(
            await load(
              'export enum T { Div = "div" }\n<${T.Div} class="x">hi</>',
            ).default.render({}),
          ),
          "<div class=x>hi</div>",
        );
      });

      it("leaves members written through a type assertion", () => {
        assert.match(
          print(
            "static enum E { A = 1 }\nstatic function f() { (E.A as any) = 5; (E.A as any)++; [(E.A as any)] = [7]; for ((<any>E.A) of []); delete (E.A as any); ({ a: E.A! } = {}); }",
          ),
          /E\.A = 5;\n {2}E\.A\+\+;\n {2}\[E\.A\] = \[7\];\n {2}for \(E\.A of \[\]\);\n {2}delete E\.A;\n {2}\(\{\n {4}a: E\.A\n {2}\} = \{\}\);/,
        );
      });

      it("leaves members an enum or namespace a scope declares later hides", () => {
        assert.equal(
          load(
            "export enum O { A = 1 }\nstatic function f() { function g() { return O.A; } enum O { A = 5 } return g(); }\nexport { f };",
          ).f(),
          5,
        );
        assert.equal(
          load(
            "export enum O { A = 1 }\nexport namespace N { export function v() { return O.A; } export enum O { A = 5 } }",
          ).N.v(),
          5,
        );
      });

      it("reads an initializer's member a nested block hides only there", () => {
        assert.deepEqual(
          {
            ...load(
              "export enum E { A = 1, B = (() => { if (true) { const A = 5; } return A + 1; })(), C = (() => { try { throw 0; } catch (A) {} return A + 2; })() }",
            ).E,
          },
          { A: 1, B: 2, C: 3, 1: "A", 2: "B", 3: "C" },
        );
      });

      it("reads a module const only of a plain name, through aliases", () => {
        assert.deepEqual(
          {
            ...load(
              'static const { length: P } = "abc";\nexport enum E { A = P }',
            ).E,
          },
          { A: 3, 3: "A" },
        );
        assert.deepEqual(
          {
            ...load(
              'static const Q = "q" as const;\nstatic const P = Q;\nexport enum E { A = P }',
            ).E,
          },
          { A: "q" },
        );
        assert.match(
          print(
            "static const P = Q;\nstatic const Q = P;\nexport enum E { A = P }",
          ),
          /E\[E\["A"\] = P\] = "A";/,
        );
      });

      it("scopes a class API statement's enums to its tag's body", async () => {
        assert.equal(
          String(
            await load(
              "<div>\n$ enum E { A = 1 }\n<span>${E.A}</span>\n</div>\n<p>\n$ enum E { A = 2 }\n<span>${E.A}</span>\n</p>",
              classTranslator,
            ).default.renderToString({}),
          ),
          "<div><span>1</span></div><p><span>2</span></p>",
        );
        assert.equal(
          String(
            await load(
              "export enum E { A = 1 }\n$ const E = { A: 5 };\n<div>${E.A}</div>",
              classTranslator,
            ).default.renderToString({}),
          ),
          "<div>5</div>",
        );
      });

      it("keeps a const enum a namespace exports", () => {
        assert.deepEqual(
          load("export namespace N { export const enum K { X = 3 } }").N,
          { K: { X: 3 } },
        );
      });

      it("keeps a const enum with a member it can't fold, even unread", () => {
        assert.deepEqual(
          load(
            "static const log: number[] = [];\nstatic const enum E { A = log.push(1), B = 2 }\nexport const R = [E.B, log.length];",
          ).R,
          [2, 1],
        );
      });

      it("assigns a const enum's members in order when one doesn't fold", () => {
        const { R, E } = load(
          "static const enum K { A = Math.max(1, 2), B = A + 1, C }\nexport const R = [K.A, K.B, K.C];\nexport const E = K;",
        );
        assert.deepEqual(R, [2, 3, 4]);
        assert.deepEqual({ ...E }, { A: 2, B: 3, C: 4 });
      });

      it("removes a namespace's local const enum", () => {
        assert.equal(
          print(
            "static namespace N { const enum K { X = 3 } export const x = K.X; }",
          ),
          "static var N = (_N => {\n  const x = 3;\n  _N.x = x;\n  return _N;\n})({});",
        );
      });

      it("reads a module const through type assertions", () => {
        assert.match(
          print(
            'static const P = (1 as number) + 2;\nstatic const Q = "q";\nstatic const S = Q as string;\nstatic const T = ("t" as string) + input.x;\nstatic enum E { A = P, B = S, C = T }\nstatic const r = E.A;',
          ),
          /E\[E\["A"\] = 3\] = "A";\n {2}E\["B"\] = "q";\n {2}E\["C"\] = T;[\s\S]*static const r = 3;$/,
        );
      });

      it("strips a global declaration in a template without enums", () => {
        const src =
          "static declare global { interface Window { foo: string } }\n<div>hi</div>";
        assert.equal(print(src), "<div>\n  hi\n</div>");
        assert.equal(
          compile(src, { output: "html" }).meta.diagnostics.length,
          0,
        );
      });

      it("compiles a namespace whose keyword is escaped", () => {
        assert.equal(
          load("export n\\u0061mespace N { export const x = 1 }").N.x,
          1,
        );
      });

      it("adds a namespace to what its scope's other declaration binds", () => {
        assert.equal(
          load(
            "static declare class L {}\nstatic namespace L { export const x = 2 }\nexport const R = L.x;",
          ).R,
          2,
        );
        assert.match(
          print(
            "<for|{ E }| of=[{ E: 1 }]>\n$ namespace E { export const a = 7 }\n<span>${E.a}</span>\n</for>",
            classTranslator,
          ),
          /\$ E = \(_E => \{/,
        );
      });

      it("leaves members a `var` hides wherever it scopes", async () => {
        const { N, C } = load(
          "export enum E { A = 1 }\nexport namespace N { if (true) { var E = { A: 5 }; } export const v = E.A; for (var F = { A: 6 }; false; ) {} export const w = F.A; }\nexport enum F { A = 2 }\nstatic class C { static v: number; static { if (true) { var E = { A: 7 }; } C.v = E.A; } }\nexport { C };",
        );
        assert.deepEqual([N.v, N.w, C.v], [5, 6, 7]);
        assert.equal(
          String(
            await load(
              "export enum E { A = 1 }\n<div>\n$ if (true) { var E = { A: 5 }; }\n<span>${E.A}</span>\n</div>",
              classTranslator,
            ).default.renderToString({}),
          ),
          "<div><span>5</span></div>",
        );
      });

      it("inlines a declared const enum's members, emitting nothing", () => {
        assert.equal(
          print("static declare const enum D { A = 1 }\n<div>${D.A}</div>"),
          "<div>\n  ${1}\n</div>",
        );
      });

      it("reads only a module statement's const with a value", () => {
        assert.match(
          print("static declare const P: 5;\nexport enum E { A = P }"),
          /E\[E\["A"\] = P\] = "A";/,
        );
        assert.match(
          print('$ const P = "p";\nexport enum E { A = P }', classTranslator),
          /E\[E\["A"\] = P\] = "A";/,
        );
      });

      it("reads outside a scope what JavaScript evaluates outside it", () => {
        assert.deepEqual(
          load(
            'static function s() { const enum K { X = 1 } switch (K.X) { case 1: const K = 5; return K; } return 0; }\nstatic const enum P { X = 1 }\nstatic function p(x = P.X) { var P = 5; return x + P; }\nstatic const enum M { X = "m" }\nstatic class C { [M.X](M: number) { return M; } }\nexport const R = [s(), p(), new C().m(5)];',
          ).R,
          [5, 6, 5],
        );
      });

      it("reads no label, private name or outer import or export name", () => {
        assert.equal(
          enumOf(
            "A = 1, B = (() => { A: for (;;) { break A; } return 2; })(), C = (() => { class D { #A = 1; static t(o: any) { return #A in o; } } return D.t(new D()) ? 3 : 0; })()",
          ).C,
          3,
        );
        assert.equal(
          print(
            "static const enum K { A = 1 }\nstatic const foo = K.A;\nexport { foo as K };",
          ),
          "static const foo = 1;\nexport { foo as K };",
        );
      });

      it("leaves a bound attribute's member", async () => {
        assert.match(
          String(
            await load(
              'export enum E { A = "a" }\n<input value:=E.A/>',
            ).default.render({}),
          ),
          /^<input value=a>/,
        );
      });

      it("leaves members a template's implicit names hide", async () => {
        assert.match(
          String(
            await load(
              "static enum input { A = 1 }\nexport enum state { x = 1 }\nclass { onCreate() { this.state = { x: 5 }; } }\n<div>${input.A} ${state.x}</div>",
              classTranslator,
            ).default.renderToString({ A: 7 }),
          ),
          /<div>7 5<\/div>/,
        );
      });

      it("scopes `server` and `client` statements' enums apart", async () => {
        assert.equal(
          String(
            await load(
              "client enum E { B = 2 }\nserver enum E { A = 1 }\n<div>${typeof E}</div>",
            ).default.render({}),
          ),
          "<div>object</div>",
        );
      });

      it("inlines into template content what a `server` or `client` const enum alone declares", () => {
        for (const target of ["server", "client"]) {
          for (const output of ["html", "dom"]) {
            const { code } = compile(
              `${target} const enum E { A = 1 }\n<div>\${E.A}</div>`,
              { output },
            );
            assert.match(code, /<div>1<\/div>/);
            assert.doesNotMatch(code, /\bE\b/);
          }
        }
      });

      it("keeps both `server` and `client` const enums of a name template content reads", async () => {
        const src =
          "server const enum E { A = 1 }\nclient const enum E { A = 2 }\n<div>${E.A}</div>";
        assert.equal(
          String(await load(src).default.render({})),
          "<div>1</div>",
        );
        assert.match(compile(src, { output: "dom" }).code, /\bA: 2\b/);
      });

      it("adds a later declaration to a const enum, exporting it", () => {
        assert.deepEqual(
          load(
            "static const enum K { A = 1 }\nstatic namespace K { export const x = 2; }\nexport const R = [K.A, K.x];",
          ).R,
          [1, 2],
        );
        assert.deepEqual(
          load("static const enum K { A = 1 }\nexport const enum K { B = 2 }")
            .K,
          { A: 1, B: 2 },
        );
        assert.deepEqual(
          { ...load("static enum E { A = 1 }\nexport enum E { B = 2 }").E },
          { A: 1, B: 2, 1: "A", 2: "B" },
        );
      });

      it("numbers on from a member as a valid value", () => {
        assert.deepEqual(
          nodesOf(
            "static enum E { A = -2, B, C = 1 / 0, D, F = 0 / 0, G }",
            (node) => node.type === "NumericLiteral" && node.value < 0,
          ).length,
          0,
        );
        const e = enumOf("A = -2, B, C = 1 / 0, D, F = 0 / 0, G");
        assert.deepEqual([e.B, e.D, e.G], [-1, Infinity, NaN]);
      });

      it("leaves a member an instantiation expression calls", () => {
        assert.match(
          print("static enum E { f = 1 }\nstatic const x = (E.f<number>)();"),
          /static const x = E\.f\(\);$/,
        );
      });

      it("writes no shorthand property it replaces the value of", () => {
        assert.deepEqual(
          nodesOf(
            "static enum E { A = 1, B = ({ A }).A }",
            (node) => node.type === "ObjectProperty" && node.shorthand,
          ),
          [],
        );
      });

      it("leaves a template without enums as it was", () => {
        assert.equal(
          print(
            "static const E = { A: 1 };\nstatic function f(E: any) { return E.A; }\n<div>${E.A}</div>",
          ),
          "static const E = {\n  A: 1\n};\nstatic function f(E) {\n  return E.A;\n}\n<div>\n  ${E.A}\n</div>",
        );
      });
    });

    it("strips an exported declare enum", () => {
      assert.equal(print("export declare enum X { A }\n<div/>"), "<div/>");
    });

    it("folds earlier members into constants", () => {
      assert.equal(
        print("static enum E { A = 1, B = E.A + 1 }"),
        'static var E = /*#__PURE__*/(E => {\n  E[E["A"] = 1] = "A";\n  E[E["B"] = 2] = "B";\n  return E;\n})({});',
      );
    });

    it("strips a declare enum", () => {
      assert.equal(
        load(
          "static declare enum D { Y }\nstatic const t = typeof D;\nexport { t };",
        ).t,
        "undefined",
      );
    });

    it("compiles an enum inside a function", () => {
      assert.equal(
        load(
          "static function f() { enum L { M = 3 } return L.M; }\nexport { f };",
        ).f(),
        3,
      );
    });

    it("compiles an exported enum with the class API's translator", () => {
      assert.deepEqual(
        { ...load("export enum E { A }", classTranslator).E },
        { A: 0, 0: "A" },
      );
    });

    for (const [api, tr, src] of [
      [
        "tags",
        translator,
        "static const enum C { X = 1 }\nstatic enum E { A = 7 }\n<div>${C.X} ${E.A}</div>",
      ],
      [
        "class",
        classTranslator,
        "static const enum C { X = 1 }\n$ enum E { A = 7 }\n<div>${C.X} ${E.A}</div>",
      ],
    ]) {
      it(`renders enums a template reads, with the ${api} API`, async () => {
        assert.equal(
          String(await load(src, tr).default.render({})),
          "<div>1 7</div>",
        );
      });
    }
  });

  describe("namespaces", () => {
    const plain = (value) => JSON.parse(JSON.stringify(value));

    it("compiles one to an object with its exports, in order", () => {
      const { NS, log } = load(
        "static const log: number[] = [];\nexport namespace NS { log.push(1); export const a = 1, b = a + 1; const hidden = 2; export function f(x: number) { return x + hidden; } export class C {} export enum E { A } export const { c, d: [e] } = { c: 3, d: [4] }; log.push(2); }\nexport { log };",
      );
      assert.deepEqual(Object.keys(NS), ["a", "b", "f", "C", "E", "c", "e"]);
      assert.deepEqual(
        [NS.b, NS.f(1), new NS.C() instanceof NS.C, NS.E[0], NS.e, log],
        [2, 3, true, "A", 4, [1, 2]],
      );
    });

    it("initializes an exported namespace as the module loads", () => {
      assert.equal(
        load(
          "export namespace NS { export const a = 1; }\nexport const R = NS.a;",
        ).R,
        1,
      );
    });

    it("strips a namespace's types and type-only namespaces", () => {
      assert.equal(
        print(
          "static namespace NS { export type T = number; export interface I {} export declare const d: number; export declare function g(): void; namespace Types { export type X = 1; } export const a: T = 1; }",
        ),
        "static var NS = (_NS => {\n  const a = 1;\n  _NS.a = a;\n  return _NS;\n})({});",
      );
    });

    it("strips a namespace whose export is a function's signature alone", () => {
      assert.equal(
        print(
          "static namespace N { export function f(): void; }\nstatic const v = 1;",
        ),
        "static const v = 1;",
      );
    });

    it("merges declarations of one namespace, exported or not", () => {
      const src =
        "export namespace N { export const a = 1; }\nexport namespace N { export const b = 2; }";
      // A module exporting a name twice fails to parse.
      new vm.SourceTextModule(compile(src, { output: "html" }).code);
      assert.deepEqual(plain(load(src).N), { a: 1, b: 2 });
      assert.deepEqual(
        plain(
          load(
            "static namespace M { export const a = 1; }\nstatic namespace M { export const b = 2; }\nexport { M };",
          ).M,
        ),
        { a: 1, b: 2 },
      );
    });

    it("adds to a function, class or enum the module declares before it", () => {
      assert.deepEqual(
        load(
          "static function f() { return 1; }\nstatic namespace f { export const a = 2; }\nexport function g() { return 3; }\nexport namespace g { export const a = 4; }\nstatic class C { static s = 5; }\nstatic namespace C { export const a = 6; }\nstatic enum E { A = 7 }\nstatic namespace E { export const a = 8; }\nexport const R = [f(), f.a, g(), g.a, C.s, C.a, E.A, E.a];",
        ).R,
        [1, 2, 3, 4, 5, 6, 7, 8],
      );
    });

    it("exports a function or class a namespace adds to once", () => {
      for (const src of [
        "export function f() {}\nexport namespace f { export const a = 1; }",
        "export class f {}\nexport namespace f { export const a = 1; }",
        "static function f() {}\nexport { f };\nexport namespace f { export const a = 1; }",
        "static function f() {}\nexport namespace f { export const a = 1; }",
      ]) {
        const { code } = compile(`${src}\n<div/>`, { output: "html" });
        // A module exporting a name twice doesn't parse.
        new vm.SourceTextModule(code);
        assert.match(code, /^export (?:function|class) f\b|^export \{ f \};$/m);
      }
    });

    it("adds to a function or class a block declares before it", () => {
      assert.deepEqual(
        load(
          "static function f() { function g() { return 1; } namespace g { export const a = 2; } class C { static s = 3; } namespace C { export const a = 4; } return [g(), g.a, C.s, C.a]; }\nexport { f };",
        ).f(),
        [1, 2, 3, 4],
      );
    });

    it("declares one with `var` in the module and `let` below it", () => {
      assert.equal(
        print(
          "static function f() { namespace N { export const a = 1; } return N; }",
        ),
        "static function f() {\n  let N = (_N => {\n    const a = 1;\n    _N.a = a;\n    return _N;\n  })({});\n  return N;\n}",
      );
    });

    it("nests namespaces, adding to what an earlier one exported", () => {
      assert.deepEqual(
        plain(
          load(
            "export namespace A.B { export const x = 1; }\nexport namespace A.B { export const y = 2; }\nexport namespace A { export namespace C { export const z = 3; } namespace Hidden { export const h = 4; } export const w = Hidden.h; export enum E { P = 5 } }\nexport namespace A { export enum E { Q = 6 } }",
          ).A,
        ),
        {
          B: { x: 1, y: 2 },
          C: { z: 3 },
          w: 4,
          E: { 5: "P", 6: "Q", P: 5, Q: 6 },
        },
      );
    });

    it("names its object apart from a declaration of its name inside", () => {
      assert.equal(
        load("export namespace N { const N = 5; export const a = N; }").N.a,
        5,
      );
    });

    for (const [api, tr, src] of [
      [
        "tags",
        translator,
        'static namespace S { export function up(s: string) { return s.toUpperCase(); } }\n<div>1 ${S.up("x")}</div>',
      ],
      [
        "class",
        classTranslator,
        '$ namespace N { export const a = 1; }\nstatic namespace S { export function up(s: string) { return s.toUpperCase(); } }\n<div>${N.a} ${S.up("x")}</div>',
      ],
    ]) {
      it(`renders namespaces a template reads, with the ${api} API`, async () => {
        assert.equal(
          String(await load(src, tr).default.render({})),
          "<div>1 X</div>",
        );
      });
    }

    for (const [what, src, label, at] of [
      [
        "`let` or `var` export",
        "static namespace NS { export let a = 1; }\n<div/>",
        "A namespace can't export `let` or `var`; export a `const` instead.",
        "1:29",
      ],
      [
        "export of no declaration",
        "static namespace NS { export default 1; }\n<div/>",
        "A namespace exports only declarations; write `export` on the declaration instead.",
        "1:22",
      ],
      [
        "empty export",
        "static namespace NS { export {}; }\n<div/>",
        "A namespace exports only declarations; write `export` on the declaration instead.",
        "1:22",
      ],
    ]) {
      it(`reports a namespace's ${what}`, () => {
        assert.throws(() => compile(src, { output: "html" }), {
          message: new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
        });
        const { diagnostics } = compile(src, {
          output: "html",
          errorRecovery: true,
        }).meta;
        assert.deepEqual(
          diagnostics.map((d) => [
            d.type,
            d.label,
            `${d.loc.start.line}:${d.loc.start.column}`,
          ]),
          [["error", label, at]],
        );
      });
    }
    it("keeps the root's statements after a namespace's bad export", () => {
      const { code } = compile(
        'import "./x";\nexport namespace N { type a = 1; export { a }; }\n<div/>\n<span/>',
        { output: "source", stripTypes: true, errorRecovery: true },
      );
      assert.match(code, /<span\/>$/);
    });
  });

  it("reports an enum a migrator adds to a template whose source has none", () => {
    const { diagnostics } = compileSync(
      "<add-enum/>\n<div/>",
      path.join(
        import.meta.dirname,
        "fixtures",
        "migrated-enum",
        "template.marko",
      ),
      { translator, babelConfig, output: "html", errorRecovery: true },
    ).meta;
    assert.deepEqual(
      diagnostics.map((d) => [d.type, d.label]),
      [
        [
          "error",
          "An enum or namespace compiles only where a template's source declares one; a migrator can't add one to a template that has none.",
        ],
      ],
    );
  });

  describe("`import … =` and `export =`", () => {
    const IMPORT =
      "A template can't use `import … =`; write `import … from` or a `const` instead.";
    for (const [what, src, label, at] of [
      [
        "a namespace alias",
        "static namespace N { export const a = 1; }\nstatic import A = N.a;\n<div/>",
        IMPORT,
        "2:7",
      ],
      [
        "an exported alias",
        "static namespace N { export const a = 1; }\nexport import A = N.a;\n<div/>",
        IMPORT,
        "2:0",
      ],
      ["a require", 'static import fs = require("fs");\n<div/>', IMPORT, "1:7"],
      [
        "`export =`",
        "static const x = 1;\nexport = x;\n<div/>",
        "A template can't use `export =`; export by name instead.",
        "2:0",
      ],
    ]) {
      it(`reports ${what}`, () => {
        const { diagnostics } = compile(src, {
          output: "html",
          errorRecovery: true,
        }).meta;
        assert.deepEqual(
          diagnostics.map((d) => [
            d.type,
            d.label,
            `${d.loc.start.line}:${d.loc.start.column}`,
          ]),
          [["error", label, at]],
        );
      });
    }

    it("strips `import type … =`", () => {
      assert.equal(
        print(
          'static import type T = require("./t");\nexport type { T };\n<div/>',
        ),
        "<div/>",
      );
    });
  });

  describe("parameter properties", () => {
    const fields = (src) => ({
      ...load(`${src}\nexport const R = new P(1);`).R,
    });

    it("assigns each first in its constructor", () => {
      assert.deepEqual(
        fields(
          "static class P { f = 0; constructor(public x: number, private y = 2, readonly z?: string, protected override w = 3) { (this as any).seen = this.x; } }",
        ),
        { f: 0, x: 1, y: 2, z: undefined, w: 3, seen: 1 },
      );
    });

    it("assigns each after a derived constructor's super call", () => {
      assert.equal(
        print(
          "static class D extends B { constructor(public d: number) { const t = d * 2; super(t); } }",
        ),
        "static class D extends B {\n  constructor(d) {\n    const t = d * 2;\n    super(t);\n    this.d = d;\n  }\n}",
      );
      assert.deepEqual(
        fields(
          "static class B { constructor(public b: number) {} }\nstatic class P extends B { constructor(public d: number) { super(d * 2); } }",
        ),
        { b: 2, d: 1 },
      );
    });
  });
});
