import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const input = (rows: [id: string, text: string][]) => ({
  rows: rows.map(([id, text]) => ({ id, text })),
  $global: { persisted: true },
});

const BOTH: [string, string][] = [
  ["x", "ROW-EX v1"],
  ["y", "ROW-WHY v1"],
];

const texts = (document: Document) =>
  [...document.querySelectorAll("span.text")].map((el) => el.textContent);

// Liveness pruning through the real DOM: a committed value claim whose
// group anchor a later patch DESTROYED must not be echoed again. If the
// stale claim survived, re-adding the identical row would let the server
// elide a fill the freshly constructed branch never received — silent
// missing content. (The carrier additionally drops its claim-set id
// whenever this prune changes the store.)
export const config: TestConfig = {
  persisted: true,
  skip_csr: true,
  equivalent: false,
  steps: [
    input(BOTH),
    // Seed: the first patch carries no echo, ships whole, and commits
    // claims for both row groups via the feedback line.
    navigate(input(BOTH)),
    // Claims are live: an unchanged same-route hop elides both rows.
    navigate(input(BOTH), {
      mutateFrames(frames) {
        assert.ok(
          !frames.join("\n").includes("ROW-EX"),
          "held row group was not elided — the claim never committed",
        );
        return frames;
      },
    }),
    // Remove row x: its branch (the group's anchor) is destroyed while
    // the committed store still carries the claim (delta feedback never
    // restates untouched entries).
    navigate(input([["y", "ROW-WHY v1"]])),
    (document: Document) => assert.deepEqual(texts(document), ["ROW-WHY v1"]),
    // Re-add the identical row: the dead-anchor claim must have pruned,
    // so the fill ships again for the freshly constructed branch.
    navigate(input(BOTH), {
      mutateFrames(frames) {
        assert.ok(
          frames.join("\n").includes("ROW-EX"),
          "destroyed-anchor claim was echoed: content elided for a branch that never received it",
        );
        return frames;
      },
    }),
    (document: Document) =>
      assert.deepEqual(texts(document), ["ROW-EX v1", "ROW-WHY v1"]),
  ],
};
