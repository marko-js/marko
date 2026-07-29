import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate } from "../../utils/resolve";

const REGION_FRAME = /\[0,";/;
const $global = { persisted: true, persistedHeldRegions: true };
const input = () => ({ reviews: [1, 2], $global });

// A region inside a streamed boundary body records like any other applied
// region: once the settled patch seeded it, the next patch holds it.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(),
    flush,
    navigate(input()), // seeds once its boundary frame applies
    flush,
    navigate(input(), {
      mutateFrames(frames: string[]) {
        for (const frame of frames) {
          assert.doesNotMatch(
            frame,
            REGION_FRAME,
            "a settled, unchanged awaited region re-shipped",
          );
        }
        return frames;
      },
    }),
    flush,
    (document: Document) =>
      assert.equal(
        [...document.querySelectorAll(".review")].length,
        2,
        "awaited region content must stay live",
      ),
  ],
};
