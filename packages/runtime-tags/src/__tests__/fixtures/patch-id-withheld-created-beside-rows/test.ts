import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Kept content in a scope, directly and in its client row: on the page only the row
// joins the owner's set; created, the direct one keeps its own `<id>`, not the record's.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    check,
    { show: true, label: "b" },
    check,
    { show: false, label: "c" },
    { show: true, label: "d" },
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
