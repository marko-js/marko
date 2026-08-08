import assert from "assert/strict";

import { compileSync } from "@marko/compiler";

describe("compiler/parser-locations", () => {
  it("bounds a trimmed text node's range to the trimmed text", () => {
    const text = firstText("<div>\n    hello\n</div>");
    assert.equal(text.type, "MarkoText");
    assert.equal(text.value, "hello");
    assert.deepEqual(JSON.parse(JSON.stringify(text.loc)), {
      start: { line: 2, column: 4 },
      end: { line: 2, column: 9 },
    });
  });

  it("spans the source text even when internal whitespace collapses", () => {
    // The value collapses to "a b" but the range must cover the raw "a   b".
    const text = firstText("<div>\n  a   b\n</div>");
    assert.equal(text.value, "a b");
    assert.deepEqual(JSON.parse(JSON.stringify(text.loc)), {
      start: { line: 2, column: 2 },
      end: { line: 2, column: 7 },
    });
  });

  it("bounds a trailing-trimmed text node", () => {
    // Only the newline run is trimmed; the spaces collapse into the value.
    const text = firstText("<div>hi   \n</div>");
    assert.equal(text.value, "hi ");
    assert.deepEqual(JSON.parse(JSON.stringify(text.loc)), {
      start: { line: 1, column: 5 },
      end: { line: 1, column: 10 },
    });
  });
});

function firstText(src) {
  const { ast } = compileSync(src, "text-loc.marko", {
    ast: true,
    code: false,
    output: "source",
  });
  return ast.program.body[0].body.body[0];
}
