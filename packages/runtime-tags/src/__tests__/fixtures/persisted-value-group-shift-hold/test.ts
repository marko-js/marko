import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const input = (alerts: string[], names: string[]) => ({
  alerts: alerts.map((text, i) => ({ id: `a${i}`, text })),
  items: names.map((name) => ({ id: name.toLowerCase(), name })),
  $global: { persisted: true },
});

// The round-6 wall, pinned: an EARLIER list growing must not miss the
// unchanged item groups after it. Group digests are shift-invariant
// (group-relative ordinals), so only genuinely changed content ships.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    input([], ["W1DGT", "G4DGT"]),
    navigate(input([], ["W1DGT", "G4DGT"])),
    // Hold baseline.
    navigate(input([], ["W1DGT", "G4DGT"]), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        for (const token of ["W1DGT", "G4DGT"]) {
          assert.ok(
            !joined.includes(token),
            `held item group re-shipped ${token}`,
          );
        }
        return frames;
      },
    }),
    // An earlier sibling list GROWS: every later scope id shifts, but the
    // unchanged item groups must still hold.
    navigate(input(["N3W-AL3RT"], ["W1DGT", "G4DGT"]), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        assert.ok(joined.includes("N3W-AL3RT"), "grown list did not ship");
        for (const token of ["W1DGT", "G4DGT"]) {
          assert.ok(
            !joined.includes(token),
            `id shift missed the unchanged item group (${token})`,
          );
        }
        return frames;
      },
    }),
    (document: Document) => {
      assert.deepEqual(
        [...document.querySelectorAll("li.alert")].map((el) => el.textContent),
        ["N3W-AL3RT"],
      );
      assert.deepEqual(
        [...document.querySelectorAll("li.item")].map((el) => el.textContent),
        ["W1DGTtap 0", "G4DGTtap 0"],
      );
    },
    (document: Document) =>
      document.querySelectorAll<HTMLButtonElement>("button.tap")[0]!.click(),
    // A keyed REORDER: item ids swap but each item's single-scope rank
    // digest survives, so the items hold while the parent ships the new
    // order (pairing their placeholders to live anchors by key).
    navigate(input(["N3W-AL3RT"], ["G4DGT", "W1DGT"]), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        for (const token of ["W1DGT", "G4DGT"]) {
          assert.ok(
            !joined.includes(token),
            `reorder re-shipped a held item group (${token})`,
          );
        }
        return frames;
      },
    }),
    (document: Document) => {
      assert.deepEqual(
        [...document.querySelectorAll("li.item")].map((el) => el.textContent),
        ["G4DGTtap 0", "W1DGTtap 1"],
      );
    },
  ],
};
