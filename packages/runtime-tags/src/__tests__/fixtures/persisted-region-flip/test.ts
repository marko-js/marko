import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const REGION_FRAME = /\[0,";/;
const note = (document: Document) =>
  document.querySelector(".note")?.textContent;

const assertShips = {
  mutateFrames(frames: string[]) {
    assert.ok(
      frames.some((frame) => REGION_FRAME.test(frame)),
      "expected the region markup to ship",
    );
    return frames;
  },
};

const nav = (mode: string) =>
  navigate(
    { mode, $global: { persisted: true, persistedHeldRegions: true } },
    assertShips,
  );

// Flipping a branch destroys the held range, so flipping back must ship the
// markup again even though its digest was once recorded — a stale possession
// may never suppress the only fill that would rebuild the DOM.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { mode: "a", $global: { persisted: true, persistedHeldRegions: true } },
    nav("a"), // seeds alpha
    (document: Document) => assert.equal(note(document), "alpha panel"),
    nav("b"), // destroys alpha's range, seeds beta
    (document: Document) => assert.equal(note(document), "beta panel"),
    // Alpha's digest was recorded but its DOM is gone: the snapshot drops the
    // dead range, the echo misses, and the markup ships again.
    nav("a"),
    (document: Document) => assert.equal(note(document), "alpha panel"),
  ],
};
