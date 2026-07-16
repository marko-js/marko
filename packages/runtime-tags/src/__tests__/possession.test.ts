import assert from "node:assert/strict";

import { encodePossessionSite, encodePossessionValue } from "../common/helpers";

describe("possession key encoding", () => {
  it("round-trips string and number keys unambiguously", () => {
    assert.deepEqual(
      [
        encodePossessionValue("1"),
        encodePossessionValue(1),
        encodePossessionValue(-1.5),
        encodePossessionValue(0),
      ],
      ["s1:1", "n1", "n-1.5", "n0"],
    );
    // A string that looks like an encoded number stays distinct.
    assert.notEqual(encodePossessionValue("n1"), encodePossessionValue(1));
  });

  it("makes nested site paths unambiguous", () => {
    assert.notEqual(
      encodePossessionSite("outer", "a") +
        "/" +
        encodePossessionSite("inner", "same"),
      encodePossessionSite("inner", "same"),
    );
  });

  it("rejects non-loop-key values in debug builds", () => {
    // Loop keys are contractually string | number (`assertValidLoopKey`);
    // everything else is a contract violation surfaced in debug builds.
    assert.throws(() => encodePossessionValue({}), TypeError);
    assert.throws(() => encodePossessionValue(null), TypeError);
    assert.throws(() => encodePossessionValue(true), TypeError);
    assert.throws(() => encodePossessionValue(undefined), TypeError);
  });
});
