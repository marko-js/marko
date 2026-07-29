import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const REGION_FRAME = /\[0,";/;
const $global = { persisted: true, persistedHeldRegions: true };
const item = (title: string, stamp: string) => ({
  ...$global,
  view: "item",
  title,
  stamp,
  reviews: [1, 2],
});
const reviews = (document: Document) =>
  document.querySelectorAll(".review").length;

// The ecommerce race-then-back shape: a constructed hop's stream is
// superseded mid-pending, the winner re-streams the boundary over the
// MATCHED parent (its pending frame wholesale-constructs the body and
// records the pending anchor on the live scope), and the settle frame must
// commit the settled anchor back — a stale pending fact makes the next
// patch wholesale-replace the settled body, destroying the very range its
// held region re-asserts, and the navigation fails closed into a document
// reload where a merge (and the claimed possession) was owed.
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    { $global: { ...$global, view: "home" } },
    // Constructed hop, superseded after its pending frame: the boundary is
    // left mid-pending (placeholder up, body never arrived).
    navigate(
      {
        $global: {
          ...$global,
          persistedCrossRoute: true,
          ...item("eco mount", "today"),
        },
      },
      { abortAfterFrame: 1 },
    ),
    (document: Document) => assert.equal(reviews(document), 0),
    // The winner: same route over the matched parent, no committed claims
    // (the superseded stream forgave its feedback), so the boundary streams
    // live — pending frame, then body frame — and the region records.
    navigate(
      { $global: item("advanced tool", "today") },
      {
        inspectWire({ frames }) {
          assert.ok(
            frames.some((frame) => REGION_FRAME.test(frame)),
            "expected the region markup to ship",
          );
        },
      },
    ),
    (document: Document) => assert.equal(reviews(document), 2),
    // The traversal: values beside the region change, the region's bytes do
    // not — it holds (no markup frame), and its recorded range must still
    // be the live branch the apply-time verify accepts.
    navigate(
      { $global: item("eco mount", "tomorrow") },
      {
        mutateFrames(frames: string[]) {
          for (const frame of frames) {
            assert.doesNotMatch(
              frame,
              REGION_FRAME,
              "a settled, unchanged region re-shipped",
            );
          }
          return frames;
        },
      },
    ),
    (document: Document) => {
      assert.equal(document.querySelector(".title")?.textContent, "eco mount");
      assert.equal(
        document.querySelector(".updated")?.textContent,
        "updated tomorrow",
      );
      assert.equal(reviews(document), 2, "held region content must stay live");
    },
  ],
};
