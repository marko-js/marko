import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const REGION_FRAME = /\[0,";/;
const $global = {
  persisted: true,
  persistedHeldRegions: true,
  persistedToken: true,
};

// A region ships as `";<identity>|<digest>"`. Tokenized, the identity is one
// opaque segment; raw, it is the `site|instance` pair, so an extra `|` in
// there means an application key reached the wire.
let seenRegionIds = 0;
const assertOpaque = (frames: string[]) => {
  for (const frame of frames) {
    for (const [, id] of frame.matchAll(/";([^"]+)"/g)) {
      const at = id.lastIndexOf("|");
      if (at < 1) continue;
      seenRegionIds++;
      assert.match(
        id.slice(0, at),
        /^t\d+$/,
        `region identity leaked: ${id.slice(0, at)}`,
      );
    }
  }
  return frames;
};

const assertShips = {
  mutateFrames(frames: string[]) {
    assert.ok(
      frames.some((frame) => REGION_FRAME.test(frame)),
      "expected the region markup to ship",
    );
    return assertOpaque(frames);
  },
};

const assertHeld = {
  mutateFrames(frames: string[]) {
    for (const frame of frames) {
      assert.doesNotMatch(frame, REGION_FRAME, "a held region re-shipped");
    }
    return assertOpaque(frames);
  },
};

// Opaque identities still key the echo: the second patch holds the region it
// recorded under a token, so elision survives the indirection.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { promo: true, promoText: "free shipping", $global },
    navigate({ promo: true, promoText: "free shipping", $global }, assertShips),
    navigate({ promo: true, promoText: "free shipping", $global }, assertHeld),
    (document: Document) => {
      assert.equal(
        document.querySelector(".promo")?.textContent,
        "sale! free shipping",
      );
      // Guards the checks above against passing vacuously.
      assert.ok(seenRegionIds > 0, "no region identity was inspected");
    },
  ],
};
