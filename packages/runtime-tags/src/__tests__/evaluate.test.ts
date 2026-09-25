import assert from "assert/strict";

import {
  parse,
  parseExpression,
  traverse,
} from "@marko/compiler/internal/babel";

import * as ValueKind from "../translator/util/constants/value-kind";
import evaluate, {
  getPossibleValues,
  getValueKinds,
} from "../translator/util/evaluate";

const read = (src: string) =>
  evaluate(parseExpression(src, { allowAwaitOutsideFunction: true }) as any);

// Every case here uses an identifier somewhere so the fold declines and the
// kinds of each part are what answer.
const kinds = (src: string) => {
  let result = 0;
  traverse(parse(`(${src});`, { allowAwaitOutsideFunction: true }), {
    ExpressionStatement(path: any) {
      result = getValueKinds(getPossibleValues(path.get("expression")));
      path.stop();
    },
  });
  return result;
};
const nullable = (src: string) => !!(kinds(src) & ValueKind.Nullish);

describe("runtime-tags/translator evaluate", () => {
  describe("folding", () => {
    it("is confident about a constant", () => {
      const { confident, computed } = read("1 + 1");
      assert.equal(confident, true);
      assert.equal(computed, 2);
    });

    it("is not confident about an identifier", () => {
      const { confident, computed } = read("foo");
      assert.equal(confident, false);
      assert.equal(computed, undefined);
    });

    it("reuses the answer it already recorded", () => {
      const node = parseExpression("1 + 1") as any;
      assert.equal(evaluate(node).computed, 2);
      node.extra.computed = "kept";
      assert.equal(evaluate(node).computed, "kept");
    });
  });

  describe("kinds of a constant", () => {
    it("is the constant's own kind", () => {
      assert.equal(kinds("1 + 1"), ValueKind.NonZero);
      assert.equal(kinds('""'), ValueKind.EmptyString);
      assert.equal(kinds("null"), ValueKind.Null);
      assert.equal(kinds("void 0"), ValueKind.Undefined);
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
    ]) {
      it(src, () => assert.equal(nullable(src), false));
    }
  });

  describe("shapes that can be nullish", () => {
    for (const src of ["foo", "foo.bar", "foo()", "void foo", "await foo"]) {
      it(src, () => assert.equal(nullable(src), true));
    }
  });

  describe("logical operators", () => {
    // `||` and `??` only result in a truthy or non-nullish left, and `&&` only
    // in a falsy one.
    it("|| narrows the left to truthy", () => {
      assert.equal(nullable("foo || 1"), false);
      assert.equal(nullable("foo || bar"), true);
    });
    it("?? narrows the left to non-nullish", () => {
      assert.equal(nullable("foo ?? 1"), false);
      assert.equal(nullable("foo ?? bar"), true);
    });
    it("&& narrows the left to falsy", () => {
      assert.equal(nullable("1 && 2"), false);
      assert.equal(nullable("foo && 1"), true);
      assert.equal(
        kinds('foo && "x"'),
        ValueKind.Falsy | ValueKind.NonEmptyString,
      );
    });
  });

  describe("assignment", () => {
    it("= follows the value assigned", () => {
      assert.equal(nullable("foo = 1"), false);
      assert.equal(nullable("foo = bar"), true);
    });
    it("an arithmetic assignment is never nullish", () =>
      assert.equal(nullable("foo += bar"), false));
    it("||= and ??= narrow the left", () => {
      assert.equal(nullable("foo ||= 1"), false);
      assert.equal(nullable("foo ??= bar"), true);
    });
    it("&&= follows either operand", () => {
      assert.equal(nullable("foo &&= 1"), true);
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
  });
});
