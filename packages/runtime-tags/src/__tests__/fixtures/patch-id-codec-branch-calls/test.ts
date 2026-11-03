import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate id: " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
    assert.equal(document.getElementById(input.id), input);
  }
}
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { left: true, right: true },
    check,
    { left: false, right: true },
    check,
    { left: true, right: true },
    check,
  ],
};
