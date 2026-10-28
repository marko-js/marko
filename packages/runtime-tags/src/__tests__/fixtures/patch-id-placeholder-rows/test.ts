import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, rejectAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: () => [
    // Each row's placeholder while its body waits, then its catch.
    {
      rows: [
        { key: "a", promise: rejectAfter(new Error("x")) },
        { key: "b", promise: rejectAfter(new Error("y")) },
      ],
    },
    checkIds,
    wait,
    flush,
    checkIds,
  ],
};
function checkIds(document: Document) {
  const seen = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!seen.has(input.id), "duplicate " + input.id);
    seen.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  assert.equal(seen.size, 2);
}
