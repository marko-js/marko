import assert from "assert/strict";

import { parseArgs, parseExpression } from "@marko/compiler/babel-utils";

// Only the source, the parser options and the metadata the line index is
// cached on are read.
const file = {
  code: "<div/>",
  opts: { parserOpts: {} },
  metadata: { marko: {} },
};

describe("compiler/babel-utils parse", () => {
  it("gives a parse error without a source range no loc, and the parsed string as its source", () => {
    const [err] = parseArgs(file, "), (1");
    assert.equal(err.type, "MarkoParseError");
    assert.equal(err.loc, undefined);
    assert.equal(err.source, "), (1");
  });

  it("gives a parse error without a source end no loc", () => {
    const err = parseExpression(file, "1 +", 0);
    assert.equal(err.type, "MarkoParseError");
    assert.equal(err.loc, undefined);
    assert.equal(err.errorLoc, undefined);
  });
});
