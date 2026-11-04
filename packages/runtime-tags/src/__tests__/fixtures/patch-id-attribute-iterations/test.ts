import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { items: ["a", "b"], record: { a: 1 }, end: 1 },
    check,
    { items: ["c"], record: { b: 2, c: 3 }, end: 2 },
    check,
  ],
};
function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id));
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  assert(ids.size > 0);
}
