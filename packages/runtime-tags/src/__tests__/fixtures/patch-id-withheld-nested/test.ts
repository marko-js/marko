import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { label: "a", show: false, items: [] },
    check,
    { label: "b", show: true, items: [{ id: 1 }] },
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
}
