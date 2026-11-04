import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
const keys = [
  0,
  "0",
  "a b",
  "a_b",
  "💠",
  "",
  "1Sa2Da0",
  "a".repeat(36),
  -1,
  1.5,
];
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { keys, show: false },
    { keys: keys.toReversed(), show: true },
    clickAndCheck,
    checkCounts,
  ],
};
function clickAndCheck(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id));
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
    // An optimized id is a plain token; a debug one reads as its hops.
    assert(/^[A-Za-z][A-Za-z0-9_-]*$|^sM_[.[]/.test(input.id), input.id);
  }
  for (const button of document.querySelectorAll("button")) button.click();
}

function checkCounts(document: Document) {
  for (const p of document.querySelectorAll("p"))
    assert(p.textContent!.endsWith(":1"));
}
