import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A label a patch creates names its scope's id: in a kept row, in dynamic
// content, and in kept content a created row renders.
export const config: TestConfig = {
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { items: [{ key: "a" }, { key: "b" }], on: true, rows: [{ id: 1 }] },
    check,
    {
      items: [{ key: "b" }, { key: "a" }],
      on: true,
      show: true,
      rows: [{ id: 1 }, { id: 2 }],
    },
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
