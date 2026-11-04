import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ key: "a" }, { key: "b" }] },
    { items: [{ key: "b" }, { key: "c" }] },
    checkIds,
    { items: [{ key: 1 }, { key: "1" }, { key: "-" }, { key: "_" }] },
    checkIds,
  ],
};

function checkIds(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate id: " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
}
