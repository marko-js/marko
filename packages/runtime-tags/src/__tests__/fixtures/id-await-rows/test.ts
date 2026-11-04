import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    // Each row renders an id before its await, whose body renders later.
    {
      items: [
        { promise: resolveAfter("a") },
        { promise: resolveAfter("b", 2) },
      ],
    },
    wait,
    flush,
    check,
    {
      items: [
        { promise: Promise.resolve("b") },
        { promise: Promise.resolve("c") },
      ],
    },
    wait,
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
