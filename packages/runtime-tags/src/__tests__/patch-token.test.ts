import assert from "node:assert/strict";

import { decodeHeld, encodeHeld } from "../html/patch";

describe("patch token", () => {
  it("names a template's shells as one bitmap", () => {
    const ids = new Set(["d", "d0", "d2", "b13", "ab5"]);
    const token = encodeHeld(ids);
    assert.equal(token, "d:Cw,b:AEA,ab:QA");
    assert.deepEqual([...decodeHeld(token)].sort(), [...ids].sort());
  });

  it("stays under budget by forgetting the oldest templates", () => {
    const ids = new Set<string>();
    for (let i = 0; i < 1000; i++) ids.add("t" + i.toString(36) + "x" + 3);
    const token = encodeHeld(ids);
    assert.ok(token.length <= 1024, token.length + " > 1024");
    const kept = decodeHeld(token);
    assert.ok(kept.size < ids.size);
    assert.ok(kept.has("trrx3"), "the newest template stays");
    assert.ok(!kept.has("t0x3"), "the oldest template goes");
  });
});
