import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A client row renders kept content, then throws in its `<try>`.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a", promise: 0 },
    check,
    { show: true, label: "b", promise: 0 },
    check,
    { show: true, label: "c", promise: 0 },
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
