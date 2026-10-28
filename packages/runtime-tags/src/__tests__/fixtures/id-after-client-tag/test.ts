import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// The first id after a dynamic tag on client state, which no patch writes, and
// the first id of what it renders.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, check],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  assert.equal(ids.size, 2);
}
