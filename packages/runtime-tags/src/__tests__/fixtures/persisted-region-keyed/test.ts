import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const REGION_FRAME = /\[0,";/;
const badges = (document: Document) =>
  [...document.querySelectorAll(".badge")].map((el) => el.textContent);
const titles = (document: Document) =>
  [...document.querySelectorAll(".open")].map((el) => el.textContent);

const one = { id: "one", title: "One", badge: "new" };
const two = { id: "two", title: "Two", badge: "hot" };
const $global = { persisted: true, persistedHeldRegions: true };

// Keyed instances carry their identity through reorders: the same badge
// regions are held even when their ordinals shift, and only a genuinely
// changed badge ships.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { items: [one, two], $global },
    // Seeds both badge regions.
    navigate({ items: [one, two], $global }),
    // Reordered but byte-identical per key: nothing re-ships.
    navigate(
      { items: [two, one], $global },
      {
        mutateFrames(frames: string[]) {
          for (const frame of frames) {
            assert.doesNotMatch(
              frame,
              REGION_FRAME,
              "a reordered-but-identical keyed region re-shipped",
            );
          }
          return frames;
        },
      },
    ),
    (document: Document) => {
      assert.deepEqual(titles(document), ["Two", "One"]);
      assert.deepEqual(badges(document), ["hot", "new"]);
    },
    // One badge changes: exactly that region ships again.
    navigate(
      { items: [two, { ...one, badge: "sale" }], $global },
      {
        mutateFrames(frames: string[]) {
          assert.equal(
            frames.join("").split('[0,";').length - 1,
            1,
            "exactly the changed badge region must ship",
          );
          return frames;
        },
      },
    ),
    (document: Document) => {
      assert.deepEqual(badges(document), ["hot", "sale"]);
    },
  ],
};
