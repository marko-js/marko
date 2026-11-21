import assert from "assert/strict";

import { types as t } from "@marko/compiler";
import { normalizeTemplateString } from "@marko/compiler/babel-utils";

describe("compiler/babel-utils normalizeTemplateString", () => {
  it("marks only the last element of the template literal as the tail", () => {
    const literal = normalizeTemplateString(
      ["a", "b", "c"],
      t.identifier("x"),
      t.identifier("y"),
    );
    assert.deepEqual(
      literal.quasis.map(({ tail, value }) => ({ tail, raw: value.raw })),
      [
        { tail: false, raw: "a" },
        { tail: false, raw: "b" },
        { tail: true, raw: "c" },
      ],
    );
  });

  it("reads a template element quasi by its cooked value", () => {
    const literal = normalizeTemplateString(
      [t.templateElement({ raw: "\\u0061", cooked: "a" }), "b"],
      t.identifier("x"),
    );
    assert.deepEqual(
      literal.quasis.map(({ value }) => value.cooked),
      ["a", "b"],
    );
  });
});
