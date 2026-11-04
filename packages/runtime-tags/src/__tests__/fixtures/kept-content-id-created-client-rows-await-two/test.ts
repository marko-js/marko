import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Two client rows await a ready value around kept content: each row's `<id>`
// renders apart.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    check,
    { show: true, label: "b" },
    check,
    { show: true, label: "c" },
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
