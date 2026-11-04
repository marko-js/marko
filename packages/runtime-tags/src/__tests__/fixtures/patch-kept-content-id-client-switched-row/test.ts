import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// Client code switches the content a row's site renders, where every row may be
// created: a patch creating structure inside kept content leaves that branch alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a", rows: [{ id: 1 }] },
    click,
    { show: true, label: "b", rows: [{ id: 1 }, { id: 2 }] },
    check,
  ],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
