import * as assert from "assert/strict";

import { createCyclicMemo } from "../translator/util/cyclic-memo";

interface Key {
  flag: boolean;
}

describe("runtime-tags/cyclic memo", () => {
  it("caches nothing a cycle through another memo left provisional", () => {
    // `a` asks `b` before its own flag, and `b` re-asks `a`: `b`'s first
    // answer is built on `a`'s cycle answer, so it must not be cached.
    const a = createCyclicMemo(
      (key: Key): boolean => b(key) || key.flag,
      false,
    );
    const b = createCyclicMemo((key: Key): boolean => a(key), false);
    const key = { flag: true };
    assert.equal(a(key), true);
    assert.equal(b(key), true);
  });
});
