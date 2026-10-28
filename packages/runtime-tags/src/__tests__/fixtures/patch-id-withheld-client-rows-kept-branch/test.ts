import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Rows client code renders on the page hold kept content whose branch no input
// drives: a patch pairs it, never creates it, so it applies with each `<id>` kept.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, check, { label: "b" }, check],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
