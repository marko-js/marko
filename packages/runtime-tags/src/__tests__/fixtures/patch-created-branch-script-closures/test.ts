import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (d: Document) => {
  d.querySelector<HTMLButtonElement>("button")!.click();
};

// A lazy route's child creates a branch whose script reads several inputs, and
// re-runs it when the child's own state changes.
export const config: TestConfig = {
  patches: true,
  steps: [
    { projection: null, baseXp: 1, playerId: "p" },
    { projection: { skill: "wood" }, baseXp: 2, playerId: "p" },
    (d: Document) => assert.equal(d.body.dataset.watch, "wood:2:p:0"),
    click,
    (d: Document) => assert.equal(d.body.dataset.watch, "wood:2:p:1"),
  ],
};
