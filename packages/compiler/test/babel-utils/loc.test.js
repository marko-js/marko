import assert from "assert/strict";

import { types as t } from "@marko/compiler";
import { getLoc, getLocRange, withLoc } from "@marko/compiler/babel-utils";

// Only the source and the metadata the line index is cached on are read.
const file = { code: "ab\ncd", metadata: { marko: {} } };

describe("compiler/babel-utils loc", () => {
  // As the `start` of a node a migrator or transform builds, `getStart` of it,
  // or either plus an offset.
  const notIndexes = [undefined, null, NaN];

  it("gives no loc for a position that is not a number", () => {
    for (const index of notIndexes) {
      assert.equal(getLoc(file, index), undefined);
      assert.equal(getLocRange(file, index, 1), undefined);
      assert.equal(getLocRange(file, 1, index), undefined);
    }
  });

  it("places index 0 at the start of the file", () =>
    assert.deepEqual(getLoc(file, 0), { line: 1, column: 0 }));

  it("leaves a node untouched for a range that is not a number", () => {
    for (const index of notIndexes) {
      const node = withLoc(file, t.identifier("x"), index, index);
      assert.deepEqual(node, t.identifier("x"));
    }
  });
});
