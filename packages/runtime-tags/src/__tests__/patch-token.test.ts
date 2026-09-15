import assert from "node:assert/strict";

import { decodeHeld, encodeHeld } from "../html/patch";
import { _shells } from "../html/shells";

describe("patch token", () => {
  it("names held shells by registry index", () => {
    _shells({ d: "d;;", d0: "d0;;", d2: "d2;;", b13: "b13;;", ab5: "ab5;;" });
    const ids = new Set(["d", "d2", "ab5"]);
    const token = encodeHeld(ids);
    assert.equal(token, "BQABAQ");
    assert.deepEqual([...decodeHeld(token)!].sort(), [...ids].sort());
  });

  it("voids a token of another registry size", () => {
    const token = encodeHeld(new Set(["d"]));
    _shells({ zz: "zz;;" });
    assert.equal(decodeHeld(token), undefined);
  });

  it("stays under budget by forgetting its highest indices", () => {
    const registered: Record<string, string> = {};
    const ids = new Set<string>();
    for (let i = 0; i < 4000; i++) {
      const id = "t" + i.toString(36);
      registered[id] = id + ";;";
      if (i % 2) ids.add(id);
    }
    _shells(registered);
    const token = encodeHeld(ids);
    assert.ok(token.length <= 1024, token.length + " > 1024");
    const kept = decodeHeld(token)!;
    assert.ok(kept.size > 500 && kept.size < ids.size, String(kept.size));
    assert.ok(kept.has("t1"), "a low index stays");
  });
});
