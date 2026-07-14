import assert from "node:assert/strict";

import { encodePossessionSite, encodePossessionValue } from "../common/helpers";

describe("possession key encoding", () => {
  it("preserves primitive types and numeric edge values", () => {
    assert.deepEqual(
      [
        encodePossessionValue("1"),
        encodePossessionValue(1),
        encodePossessionValue(-0),
        encodePossessionValue(0),
        encodePossessionValue(NaN),
        encodePossessionValue(Infinity),
        encodePossessionValue(-Infinity),
        encodePossessionValue(true),
        encodePossessionValue(null),
      ],
      [
        "s1:1",
        "n1",
        "n-0",
        "n0",
        "nNaN",
        "n+Infinity",
        "n-Infinity",
        "b1",
        "l",
      ],
    );
  });

  it("makes nested site paths unambiguous", () => {
    assert.notEqual(
      encodePossessionSite("outer", "a") +
        "/" +
        encodePossessionSite("inner", "same"),
      encodePossessionSite("inner", "same"),
    );
  });

  it("rejects object identity keys", () => {
    assert.throws(() => encodePossessionValue({}), TypeError);
  });
});
