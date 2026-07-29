import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const $global = { persisted: true };
const items = (...names: string[]) => ({
  items: names.map((name, i) => ({ id: `k${i}`, name })),
  $global,
});

// Loop items are sited, dispatched (and so anchored) groups: a hold cycle
// over identical navigations elides every item's fills, and a single
// changed item misses alone.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    items("W1DGT", "G4DGT"),
    navigate(items("W1DGT", "G4DGT")),
    (document: Document) => {
      const names = [...document.querySelectorAll("li.item")].map(
        (li) => li.textContent,
      );
      assert.deepEqual(names, ["W1DGTtap 0", "G4DGTtap 0"], "after seed");
    },
    navigate(items("W1DGT", "G4DGT"), {
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
    (document: Document) => {
      const names = [...document.querySelectorAll("li.item")].map(
        (li) => li.textContent,
      );
      assert.deepEqual(names, ["W1DGTtap 0", "G4DGTtap 0"], "after hold");
    },
    navigate(items("W1DGT", "CH4NG"), {
      mutateFrames(frames) {
        const joined = frames.join("\n");
        assert.ok(joined.includes("CH4NG"), "changed item must ship");
        assert.ok(
          !joined.includes("W1DGT"),
          "unchanged sibling item re-shipped",
        );
        return frames;
      },
    }),
    (document: Document) => {
      const names = [...document.querySelectorAll("li.item")].map(
        (li) => li.textContent,
      );
      assert.deepEqual(names, ["W1DGTtap 0", "CH4NGtap 0"]);
    },
  ],
};
