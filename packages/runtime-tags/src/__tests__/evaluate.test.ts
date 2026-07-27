import assert from "assert/strict";

import { parseExpression } from "@marko/compiler/internal/babel";

import evaluate from "../translator/util/evaluate";

// `evaluate` folds what it can and, for the rest, answers whether the value
// could be null or undefined. Every case here uses an identifier somewhere so
// the fold declines and the nullability walk is what answers.
const read = (src: string) =>
  evaluate(parseExpression(src, { allowAwaitOutsideFunction: true }) as any);
const nullable = (src: string) => read(src).nullable;

describe("runtime-tags/translator evaluate", () => {
  describe("folding", () => {
    it("is confident about a constant", () => {
      const { confident, computed, nullable } = read("1 + 1");
      assert.equal(confident, true);
      assert.equal(computed, 2);
      assert.equal(nullable, false);
    });

    it("is not confident about an identifier", () => {
      const { confident, computed } = read("foo");
      assert.equal(confident, false);
      assert.equal(computed, undefined);
    });

    it("treats a constant null as nullable", () =>
      assert.equal(read("null").nullable, true));

    it("reuses the answer it already recorded", () => {
      const node = parseExpression("1 + 1") as any;
      assert.equal(evaluate(node).computed, 2);
      node.extra.computed = "kept";
      assert.equal(evaluate(node).computed, "kept");
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
