import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Kept content a created row renders, beside its consumer's own id: each is
// the first id of its template.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
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
  }
  for (const label of document.querySelectorAll("label")) {
    assert(ids.has(label.htmlFor), "unmatched label " + label.htmlFor);
  }
  assert.equal(ids.size, document.querySelectorAll("input").length);
}
