import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { rejectAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    {
      rows: [
        { key: "a", promise: Promise.resolve(1) },
        { key: "b", promise: Promise.resolve(2) },
      ],
    },
    wait,
    // Each row's catch, once its body rejects.
    {
      rows: [
        { key: "a", promise: rejectAfter(new Error("x")) },
        { key: "b", promise: rejectAfter(new Error("y")) },
      ],
    },
    wait,
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
