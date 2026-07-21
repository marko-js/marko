import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate } from "../../utils/resolve";

const clickCount = (document: Document) =>
  document.querySelector<HTMLButtonElement>("button.count")!.click();
const lineupItems = (document: Document) =>
  [...document.querySelectorAll("ol.lineup li")].map((li) => li.textContent);

// `Lineup` is referenced only as a runtime value, so the root's persisted
// entry must register an escape-anchor loader for its `?persisted` entry.
const assertLineup = (expected: string[]) => (document: Document) => {
  assert.deepEqual(lineupItems(document), expected);
  assert.equal(
    document.querySelector("h2.headline")!.textContent,
    `${expected.length} on stage`,
  );
};

export const config: TestConfig = {
  persisted: true,
  // Persisted SSR output carries resume-marker comment nodes that a client
  // render never produces, so the DOM trees are intentionally inequivalent.
  equivalent: false,
  steps: [
    {
      performers: ["ada", "grace"],
      $global: { persisted: true },
    },
    clickCount,
    // Same renderer on the dynamic anchor; the child keyed loop gains an item.
    navigate({
      performers: ["ada", "grace", "alan"],
      $global: { persisted: true },
    }),
    assertLineup(["ada", "grace", "alan"]),
    clickCount,
    // The loader-registered merge stays live for later navigations.
    navigate({
      performers: ["grace"],
      $global: { persisted: true },
    }),
    assertLineup(["grace"]),
    clickCount,
  ],
};
