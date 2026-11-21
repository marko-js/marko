import assert from "assert/strict";
import fs from "fs";
import { createRequire } from "module";
import path from "path";

import * as compiler from "@marko/compiler";
import { types as t } from "@marko/compiler";
import { computeNode } from "@marko/compiler/babel-utils";
import { parseExpression } from "@marko/compiler/internal/babel";

import * as translator from "../translator";
import evaluate, {
  getKinds,
  getUnknownKinds,
  isConfident,
  isNullable,
  isPure,
  KIND_FALSY,
} from "../translator/util/evaluate";
import { skip, traverseContains } from "../translator/util/traverse";

const require = createRequire(import.meta.url);

// `evaluate` folds what it can and, for the rest, answers whether the value
// could be null or undefined. Every case here uses an identifier somewhere so
// the fold declines and the value kind is what answers.
const read = (src: string) =>
  evaluate(parseExpression(src, { allowAwaitOutsideFunction: true }) as any);
const nullable = (src: string) => isNullable(read(src));

describe("runtime-tags/translator evaluate", () => {
  describe("folding", () => {
    it("is confident about a constant", () => {
      const answer = read("1 + 1");
      assert.equal(isConfident(answer), true);
      assert.equal(answer.computed, 2);
      assert.equal(isNullable(answer), false);
    });

    it("is not confident about an identifier", () => {
      const answer = read("foo");
      assert.equal(isConfident(answer), false);
      assert.equal(answer.computed, undefined);
    });

    it("treats a constant null as nullable", () =>
      assert.equal(nullable("null"), true));

    it("passes on a constant it does not fold to", () => {
      for (const src of ["(foo(), 1)", "foo = 1"]) {
        const answer = read(src);
        assert.equal(isConfident(answer), false, src);
        assert.equal(isPure(answer), false, src);
      }
      assert.equal(isConfident(read("await 1")), false);
    });

    it("reuses the answer it already recorded", () => {
      const node = parseExpression("1 + 1") as any;
      const answer = evaluate(node);
      assert.equal(answer.computed, 2);
      assert.equal(evaluate(node), answer);
    });
  });

  describe("shapes that can never be nullish", () => {
    for (const src of [
      "[foo]",
      "() => foo",
      "class { m() { return foo } }",
      "function () { return foo }",
      "new Foo(bar)",
      "({ a: foo })",
      "`x${foo}`",
      "foo++",
      "-foo",
      "foo + bar",
      "foo ? 1n : 2n",
      "[foo] ?? 1",
    ]) {
      it(src, () => assert.equal(nullable(src), false));
    }
  });

  describe("shapes that can be nullish", () => {
    for (const src of [
      "foo",
      "foo.bar",
      "'a'.b",
      "foo()",
      "void foo",
      "await foo",
      "await new Promise((r) => r(null))",
    ]) {
      it(src, () => assert.equal(nullable(src), true));
    }
  });

  describe("logical operators", () => {
    // Only the right operand can be the result when the left is truthy or
    // non-nullish, so the left says nothing about `||` and `??`.
    it("|| follows the right operand", () => {
      assert.equal(nullable("foo || 1"), false);
      assert.equal(nullable("foo || bar"), true);
    });
    it("?? follows the right operand", () => {
      assert.equal(nullable("foo ?? 1"), false);
      assert.equal(nullable("foo ?? bar"), true);
    });
    it("&& follows either operand", () => {
      assert.equal(nullable("1 && 2"), false);
      assert.equal(nullable("foo && 1"), true);
    });
  });

  describe("assignment", () => {
    it("= follows the value assigned", () => {
      assert.equal(nullable("foo = 1"), false);
      assert.equal(nullable("foo = bar"), true);
    });
    it("an arithmetic assignment is never nullish", () =>
      assert.equal(nullable("foo += bar"), false));
    it("||= and ??= follow the right operand", () => {
      assert.equal(nullable("foo ||= 1"), false);
      assert.equal(nullable("foo ??= bar"), true);
    });
    it("&&= follows either operand", () => {
      assert.equal(nullable("foo &&= 1"), true);
    });
    it("||= passes on only a truthy target, ??= a falsy one too", () => {
      assert.equal(getUnknownKinds(read("foo ||= 1")) & KIND_FALSY, 0);
      assert.equal(getUnknownKinds(read("foo ??= 1")) & KIND_FALSY, KIND_FALSY);
    });
  });

  describe("expressions that defer to a part of themselves", () => {
    it("a conditional follows both arms", () => {
      assert.equal(nullable("foo ? 1 : 2"), false);
      assert.equal(nullable("foo ? 1 : bar"), true);
    });
    it("a sequence follows its last expression", () => {
      assert.equal(nullable("(foo, 1)"), false);
      assert.equal(nullable("(1, foo)"), true);
    });
    it("an await follows what it awaits", () => {
      assert.equal(nullable("await (foo, 1)"), false);
    });
    it("parentheses follow what they wrap", () => {
      const node = parseExpression("(foo, 1)", {
        createParenthesizedExpressions: true,
      }) as any;
      assert.equal(isNullable(evaluate(node)), false);
    });
  });

  describe("value kinds", () => {
    it("an empty template literal is falsy, not a string", () =>
      assert.equal(getKinds(read("foo || ``")), KIND_FALSY));
  });

  // Each answer is confident exactly where `computeNode` folds, to the same
  // value, and pure exactly where `hasSideEffect` finds none.
  describe("folds as computeNode does, and finds the same side effects", () => {
    it("every expression in the fixture templates", () => {
      const fixtures = path.join(import.meta.dirname, "fixtures");
      const cache = new Map();
      let compared = 0;
      for (const name of fs.readdirSync(fixtures, {
        encoding: "utf8",
        recursive: true,
      })) {
        if (!name.endsWith(".marko")) continue;
        const file = path.join(fixtures, name);
        const src = fs.readFileSync(file, "utf8");
        let ast: t.File;
        try {
          ast = compiler.compileSync(src, file, {
            translator,
            cache,
            output: "source",
            ast: true,
            code: false,
            babelConfig: {
              babelrc: false,
              configFile: false,
              browserslistConfigFile: false,
            },
          }).ast;
        } catch (err) {
          // Only a fixture that expects a compile error may hold a template
          // that does not parse, which has no expressions.
          if (expectsCompileError(fixtures, name)) continue;
          throw new Error(`${name} does not compile`, { cause: err });
        }
        compared += assertEachFolds(ast.program, src);
      }
      assert.ok(compared > 40_000, `${compared} expressions`);
    });

    for (const [shape, sources] of Object.entries({
      literals: ["'a'", "''", "-0", "1n", "0n", "/a/gi", "null"],
      globals: ["undefined", "NaN", "Infinity"],
      templates: [
        "`a${1}b${'c'}`",
        "`${[1]}${{}}`",
        "`${foo}`",
        "foo`\\u`",
        "`${foo}${{ __proto__: null }}`",
      ],
      unary: ["+'1'", "-'1'", "~1", "!0", "typeof null", "void 1"],
      "unary that does not fold": ["+1n", "delete foo.bar", "-foo"],
      binary: ["'1' + 2", "7 - 2", "3 * 4", "7 / 2", "7 % 3", "2 ** 10"],
      bitwise: ["5 | 2", "6 & 3", "6 ^ 3", "1 << 3", "-8 >> 1", "-8 >>> 28"],
      comparison: ["1 == '1'", "1 != '1'", "1 === 1", "1 !== 1", "1 < 2"],
      ordering: ["2 <= 1", "'b' > 'a'", "1 >= 1"],
      "binary that does not fold": [
        "1n + 1",
        "'a' in {}",
        "1 + foo",
        "foo + 'a'",
      ],
      logical: [
        "1 && 2",
        "0 && 2",
        "0 || ''",
        "'a' || 1",
        "null ?? 1",
        "0 ?? 1",
      ],
      "logical that does not fold": ["true || foo", "null ?? foo"],
      conditional: ["1 ? 'a' : 'b'", "0 ? 'a' : 'b'"],
      "conditional that does not fold": [
        "true ? 1 : foo",
        "false ? foo : 1",
        "foo ? 1 : 1",
      ],
      objects: ["({ a: 1, 'b': [2], ['c' + 1]: null })", "({ undefined })"],
      prototypes: ["({ __proto__: [1] })", "({ ['__proto__']: 1 })"],
      "object spreads": ["({ ...{ a: 1 }, b: 2 })", "({ ...'ab' })"],
      "objects that do not fold": ["({ 1: 2 })", "({ a() {} })", "({ a })"],
      "object parts that do not fold": [
        "({ [foo]: 1 })",
        "({ ...foo })",
        "({ a: foo, [{ __proto__: null }]: 1 })",
      ],
      arrays: ["[1, , 'a']", "[...'ab', ...[1]]", "[...{ __proto__: [1] }]"],
      "arrays that do not fold": [
        "[...{}]",
        "[...null]",
        "[...foo]",
        "[foo]",
        "[foo, ...'ab']",
      ],
      "passing a constant on": ["(1, 2)", "foo = 1", "await 1"],
      "reads and calls": ["'a'.length", "foo()", "foo?.bar", "foo++"],
      writes: ["foo = 1", "foo += 1", "foo ||= 1", "delete foo.bar"],
      calls: ["new Foo()", "foo?.()", "foo`x`", "foo[bar()]", "foo?.[bar()]"],
      "immediately invoked functions": [
        "(() => 1)()",
        "(function () { return foo })()",
        "(() => foo())()",
        "(() => {})(foo())",
        "((a = foo()) => a)()",
        "(() => { throw foo })()",
        "(() => { function f() { foo() } })()",
      ],
      classes: [
        "class { a = foo() }",
        "class { static a = foo() }",
        "class { [foo()]() {} }",
        "class { static { foo() } }",
        "class extends foo() {}",
        "class { #a() { foo() } }",
        "class { #a = foo() }",
      ],
      "object members": ["({ a() { foo() } })", "({ [foo()]() {} })"],
      "side effects in parts": [
        "(foo(), 1)",
        "foo() ? 1 : 2",
        "`${foo()}`",
        "[...foo()]",
        "({ ...foo() })",
        "({ [foo()]: 1 })",
        "-foo()",
        "foo() + 1",
        "foo() || 1",
        "await foo()",
      ],
      "no side effects": ["await foo", "import('x')", "this.foo", "x => foo()"],
    })) {
      describe(shape, () => {
        for (const src of sources) {
          it(src, () => {
            const parsed = parseExpression(src, {
              allowAwaitOutsideFunction: true,
            });
            assertEachFolds(parsed, src);
          });
        }
      });
    }
  });
});

// Whether the fixture holding `template` expects its compile to fail.
function expectsCompileError(fixtures: string, template: string) {
  const testFile = path.join(
    fixtures,
    template.slice(0, template.indexOf(path.sep)),
    "test.ts",
  );
  return fs.existsSync(testFile) && !!require(testFile).config?.error_compiler;
}

// Compares every expression in `node` with `computeNode` and `hasSideEffect`.
// Returns how many.
function assertEachFolds(node: t.Node, src: string) {
  let compared = 0;
  traverseContains(node, (child) => {
    if (t.isExpression(child)) {
      const folded = computeNode(child);
      const answer = evaluate(child);
      const text = src.slice(child.start!, child.end!);
      assert.equal(isConfident(answer), !!folded, text);
      if (folded) assert.deepEqual(answer.computed, folded.value, text);
      assert.equal(
        isPure(answer),
        !traverseContains(child, hasSideEffect),
        `${text} pure`,
      );
      compared++;
    }
  });
  return compared;
}

// Marko expressions treat reads (member access included) as pure, so only
// what runs other code or writes counts; a function or method body does not
// run where it is declared.
function hasSideEffect(node: t.Node) {
  switch (node.type) {
    case "ArrowFunctionExpression":
    case "ClassPrivateMethod":
    case "ClassPrivateProperty":
    case "FunctionExpression":
      return skip;
    case "ClassMethod":
    case "ObjectMethod":
      return (
        (node.computed && traverseContains(node.key, hasSideEffect)) || skip
      );
    case "ClassAccessorProperty":
    case "ClassProperty":
      return node.static
        ? undefined
        : (node.computed && traverseContains(node.key, hasSideEffect)) || skip;
    case "CallExpression":
      return node.callee.type === "ArrowFunctionExpression" ||
        node.callee.type === "FunctionExpression"
        ? traverseContains(node.arguments, hasSideEffect) ||
            traverseContains(node.callee.params, hasSideEffect) ||
            traverseContains(node.callee.body, hasSideEffect) ||
            skip
        : true;
    case "AssignmentExpression":
    case "NewExpression":
    case "OptionalCallExpression":
    case "TaggedTemplateExpression":
    case "ThrowStatement":
    case "UpdateExpression":
      return true;
    case "UnaryExpression":
      return node.operator === "delete";
  }
}
