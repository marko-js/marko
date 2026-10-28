import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Rows client code renders hold kept content whose branch no input drives: each
// row's `<id>` is its own.
export const config: TestConfig = {
  equivalent: false,
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
