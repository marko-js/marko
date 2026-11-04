import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
const keys = [
  "a".repeat(36),
  "a".repeat(37),
  "a".repeat(100),
  "a".repeat(100) + " ",
  4095,
  4096,
  16777215,
  16777216,
  9007199254740991,
];
export const config: TestConfig = {
  patches: false,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { show: true, keys },
    check,
    { show: false, keys: keys.toReversed() },
    check,
    { show: true, keys },
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
