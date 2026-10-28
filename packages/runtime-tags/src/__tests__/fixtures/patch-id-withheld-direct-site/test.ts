import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { label: "a", rows: [{ id: 1 }] },
    check,
    { label: "b", rows: [{ id: 1 }, { id: 2 }] },
    check,
    { label: "c", rows: [{ id: 1 }, { id: 2 }, { id: 3 }] },
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
  assert.equal(document.querySelectorAll("label").length, ids.size);
}
