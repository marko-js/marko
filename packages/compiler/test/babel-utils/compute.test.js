import assert from "assert/strict";

import { computeNode } from "@marko/compiler/babel-utils";
import { parseExpression } from "@marko/compiler/internal/babel";

// `computeNode` answers "is this expression a compile-time constant, and what
// is it worth", so every case is one expression in and one value out.
const compute = (src) => computeNode(parseExpression(src));
const valueOf = (src) => {
  const result = compute(src);
  assert.ok(result, `\`${src}\` was not computable`);
  return result.value;
};

describe("compiler/babel-utils computeNode", () => {
  describe("literals", () => {
    it("string", () => assert.equal(valueOf('"a"'), "a"));
    it("number", () => assert.equal(valueOf("1.5"), 1.5));
    it("boolean", () => assert.equal(valueOf("true"), true));
    it("null", () => assert.equal(valueOf("null"), null));
    it("bigint", () => assert.equal(valueOf("2n"), 2n));
    it("regexp", () => assert.deepEqual(valueOf("/a/g"), /a/g));
    it("parenthesized", () => assert.equal(valueOf("(1)"), 1));
  });

  describe("identifiers", () => {
    it("undefined", () => assert.equal(valueOf("undefined"), undefined));
    it("NaN", () => assert.ok(Number.isNaN(valueOf("NaN"))));
    it("Infinity", () => assert.equal(valueOf("Infinity"), Infinity));
    it("anything else is not constant", () =>
      assert.equal(compute("foo"), undefined));
  });

  describe("binary operators", () => {
    const cases = [
      ["1 + 2", 3],
      ["5 - 2", 3],
      ["3 * 4", 12],
      ["9 / 2", 4.5],
      ["9 % 4", 1],
      ["2 ** 10", 1024],
      ["6 | 9", 15],
      ["6 & 3", 2],
      ["6 ^ 3", 5],
      ["1 << 3", 8],
      ["-8 >> 1", -4],
      ["-8 >>> 28", 15],
      ["1 == 1", true],
      ["1 != 2", true],
      ["1 === 1", true],
      ["1 !== 2", true],
      ["1 < 2", true],
      ["2 <= 2", true],
      ["3 > 2", true],
      ["2 >= 2", true],
    ];
    for (const [src, expected] of cases) {
      it(src, () => assert.equal(valueOf(src), expected));
    }

    it("an operator with no constant folding is not constant", () =>
      assert.equal(compute('"a" in {}'), undefined));

    it("a non-constant operand stops the fold", () =>
      assert.equal(compute("1 + foo"), undefined));

    it("mixing a BigInt with a number is not constant", () =>
      assert.equal(compute("1n + 1"), undefined));
  });

  describe("unary operators", () => {
    it("+", () => assert.equal(valueOf('+"2"'), 2));
    it("-", () => assert.equal(valueOf("-2"), -2));
    it("~", () => assert.equal(valueOf("~2"), -3));
    it("!", () => assert.equal(valueOf("!0"), true));
    it("typeof", () => assert.equal(valueOf("typeof 1"), "number"));
    it("void", () => assert.equal(valueOf("void 0"), undefined));
    it("delete is not constant", () =>
      assert.equal(compute("delete foo.bar"), undefined));
    // A computable argument gets past the early return, so this is what
    // reaches the operator switch's default.
    it("an unhandled operator is not constant", () =>
      assert.equal(compute("delete 1"), undefined));
    it("coercing a BigInt to a number is not constant", () =>
      assert.equal(compute("+1n"), undefined));
  });

  describe("logical operators", () => {
    it("&&", () => assert.equal(valueOf("1 && 2"), 2));
    it("||", () => assert.equal(valueOf("0 || 2"), 2));
    it("??", () => assert.equal(valueOf("null ?? 3"), 3));
  });

  describe("conditional", () => {
    it("picks the consequent", () => assert.equal(valueOf("1 ? 2 : 3"), 2));
    it("picks the alternate", () => assert.equal(valueOf("0 ? 2 : 3"), 3));
  });

  describe("template literal", () => {
    it("interpolates constants", () =>
      assert.equal(valueOf("`a${1}b${2}c`"), "a1b2c"));
    it("a non-constant expression stops the fold", () =>
      assert.equal(compute("`a${foo}`"), undefined));
  });

  describe("object", () => {
    it("identifier key", () =>
      assert.deepEqual(valueOf("({ a: 1 })"), { a: 1 }));
    it("string key", () =>
      assert.deepEqual(valueOf('({ "a-b": 1 })'), { "a-b": 1 }));
    it("computed key is stringified", () =>
      assert.deepEqual(valueOf("({ [1 + 1]: 2 })"), { 2: 2 }));
    it("spread", () =>
      assert.deepEqual(valueOf("({ ...{ a: 1 }, b: 2 })"), { a: 1, b: 2 }));
    it("a non-constant value stops the fold", () =>
      assert.equal(compute("({ a: foo })"), undefined));
    // The literal form sets the prototype, which is what the expression means.
    it("a literal __proto__ key sets the prototype", () => {
      const value = valueOf("({ __proto__: { p: 1 } })");
      assert.deepEqual(Object.keys(value), []);
      assert.equal(value.p, 1);
    });
    it("a computed __proto__ key is an own property", () => {
      const value = valueOf('({ ["__proto__"]: { p: 1 } })');
      assert.deepEqual(Object.keys(value), ["__proto__"]);
      assert.equal(Object.getPrototypeOf(value), Object.prototype);
    });
    it("a method is not constant", () =>
      assert.equal(compute("({ a() { return 1 }, b: 2 })"), undefined));
    it("an accessor is not constant", () =>
      assert.equal(compute("({ get a() { return 1 } })"), undefined));
  });

  describe("array", () => {
    it("elements", () => assert.deepEqual(valueOf("[1, 2]"), [1, 2]));
    it("spread", () => assert.deepEqual(valueOf("[1, ...[2, 3]]"), [1, 2, 3]));
    it("a hole keeps its slot", () => {
      const value = valueOf("[1, , 3]");
      assert.equal(value.length, 3);
      assert.equal(1 in value, false);
    });
    it("spreading a non-iterable stops the fold", () =>
      assert.equal(compute("[...1]"), undefined));
  });
});
