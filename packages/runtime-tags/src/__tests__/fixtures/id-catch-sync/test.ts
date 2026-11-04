import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Rows of a child whose try catches a known child throwing as it renders,
// then a field: the throw leaves its call without popping its hop.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { rows: [{ id: 1 }] },
    check,
    { rows: [{ id: 1 }, { id: 2 }] },
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
  assert.equal(ids.size, document.querySelectorAll("input").length);
}
