import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { mode: 0, nested: true, other: true },
    check,
    { mode: 1, nested: true, other: true },
    check,
    { mode: 2, nested: false, other: true },
    check,
    { mode: 0, nested: false, other: false },
    check,
  ],
};
function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
}
