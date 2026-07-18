import * as assert from "assert/strict";

import { inert, isInert } from "../comptime";

describe("runtime-tags/comptime inert", () => {
  it("returns primitives as-is", () => {
    for (const value of [
      "text",
      0,
      -1.5,
      NaN,
      true,
      false,
      7n,
      null,
      undefined,
    ]) {
      assert.equal(inert(value), value);
      assert.equal(isInert(value), true);
    }
  });

  it("deep-clones into frozen null-prototype trees", () => {
    const source = { site: { name: "a" }, tags: ["x", "y"] };
    const data = inert(source);

    assert.notEqual(data as unknown, source);
    assert.equal(Object.getPrototypeOf(data), null);
    assert.equal(Object.getPrototypeOf(data.site), null);
    assert.equal(Object.isFrozen(data), true);
    assert.equal(Object.isFrozen(data.site), true);
    assert.equal(Object.isFrozen(data.tags), true);
    assert.equal(Array.isArray(data.tags), true);
    assert.deepEqual(JSON.parse(JSON.stringify(data)), source);
  });

  it("brands results and is idempotent", () => {
    const data = inert({ a: [1] });
    assert.equal(isInert(data), true);
    assert.equal(isInert(data.a), true);
    assert.equal(inert(data), data);
    assert.equal(inert({ nested: data }).nested, data);
    assert.equal(isInert({}), false);
    assert.equal(
      isInert(() => {}),
      false,
    );
  });

  it("preserves shared references and cycles", () => {
    const shared = { theme: "dark" };
    const cyclic: { self?: unknown; shared: typeof shared } = { shared };
    cyclic.self = cyclic;
    const data = inert({ a: cyclic, b: shared });

    assert.equal(data.a.shared, data.b);
    assert.equal(data.a.self, data.a);
    assert.equal(isInert(data.a), true);
  });

  it("keeps __proto__ and constructor keys as plain data", () => {
    const data = inert(
      JSON.parse('{"__proto__": {"x": 1}, "constructor": "c"}'),
    );
    assert.equal(Object.getPrototypeOf(data), null);
    assert.deepEqual(Object.keys(data), ["__proto__", "constructor"]);
    assert.equal((data as { __proto__: { x: number } }).__proto__.x, 1);
  });

  it("rejects values with behavior, naming the path", () => {
    assert.throws(() => inert({ page: { go: () => 1 } }), {
      message:
        "Unable to make the function `go` inert (reading page.go): inert data cannot contain functions.",
    });
    assert.throws(() => inert([{ s: Symbol("s") }]), {
      message:
        "Unable to make Symbol(s) inert (reading [0].s): inert data cannot contain symbols.",
    });
    assert.throws(() => inert({ when: new Date(0) }), {
      message:
        "Unable to make an instance of `Date` inert (reading when): only plain objects and arrays are supported; convert it to plain data first.",
    });
    assert.throws(() => inert(new Map()), /an instance of `Map`/);
  });

  it("rejects accessors and named array properties", () => {
    assert.throws(
      () =>
        inert({
          get live() {
            return 1;
          },
        }),
      {
        message:
          "Unable to make an accessor property inert (reading live): inert data cannot contain getters or setters; copy the value into a plain property first.",
      },
    );

    const tagged: string[] & { total?: number } = ["a"];
    tagged.total = 1;
    assert.throws(() => inert(tagged), {
      message:
        "Unable to make the array inert: arrays with named properties (`total`) are not supported.",
    });
  });

  it("fills array holes with undefined", () => {
    // eslint-disable-next-line no-sparse-arrays
    const data = inert([1, , 3]);
    assert.equal(data.length, 3);
    assert.equal(1 in data, true);
    assert.equal(data[1], undefined);
  });
});
