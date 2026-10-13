import assert from "node:assert/strict";

import { _shells, rawShells } from "../html/patches/shells";
import { patchRequest, patchResponseHeaders } from "../html/patches/template";
import { decodeHeld, encodeHeld } from "../html/patches/token";
import { _patch_build } from "../html/patches/writer";

describe("patch token", () => {
  it("names held shells by registry index, as a bitmap when shorter", () => {
    _shells({ d: "d;;", d0: "d0;;", d2: "d2;;", b13: "b13;;", ab5: "ab5;;" });
    const ids = new Set(["d", "d2", "ab5"]);
    const token = encodeHeld(ids);
    assert.equal(token, "CxU");
    assert.deepEqual([...decodeHeld(token)!].sort(), [...ids].sort());
  });

  it("voids a token of another registry size", () => {
    const token = encodeHeld(new Set(["d"]));
    _shells({ zz: "zz;;" });
    assert.equal(decodeHeld(token), undefined);
  });

  it("holds nothing for a token that does not parse", () => {
    _shells({ d: "d;;" });
    assert.equal(decodeHeld("!!"), undefined);
    assert.equal(decodeHeld("not base64 at all"), undefined);
  });

  it("holds nothing for an index outside the registry", () => {
    _shells({ d: "d;;" });
    const size = Object.keys(rawShells).length;
    assert.equal(
      decodeHeld(btoa(String.fromCharCode(size * 2, size + 5))),
      undefined,
    );
  });

  it("stays under budget by forgetting its highest indices", () => {
    const registered: Record<string, string> = {};
    const ids = new Set<string>();
    // Larger than a bitmap within budget covers.
    for (let i = 0; i < 8000; i++) {
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

  it("names a few held shells of a large registry by their deltas", () => {
    const registered: Record<string, string> = {};
    for (let i = 0; i < 100; i++) registered["s" + i] = "s" + i + ";;";
    _shells(registered);
    const ids = new Set(["s1", "s50", "s99"]);
    const token = encodeHeld(ids);
    // Size × 2 as a two byte varint, then three deltas.
    assert.equal(atob(token).length, 5);
    assert.deepEqual([...decodeHeld(token)!].sort(), [...ids].sort());
  });

  it("tells a patch request of another build", () => {
    _patch_build("b1");
    try {
      assert.equal(patchRequest({ "x-marko-patch": "b0;CxU" }), "stale");
      assert.equal(patchRequest({ "x-marko-patch": "b1;CxU" }), "patch");
      assert.equal(patchRequest({ "x-marko-patch": "b1;" }), "patch");
      assert.equal(patchRequest({ "x-marko-patch": "" }), "stale");
      assert.equal(patchRequest(new Headers()), undefined);
    } finally {
      _patch_build("");
    }
  });

  it("varies every page on the request and marks a patch", () => {
    assert.deepEqual(patchResponseHeaders(undefined), {
      vary: "x-marko-patch",
    });
    assert.equal(patchResponseHeaders("patch")["x-marko-patch"], "1");
  });
});
