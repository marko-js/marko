import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, navigate, resolveAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
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
    navigate(next),
    wait,
    flush,
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

function next() {
  return {
    items: [{ promise: resolveAfter("b") }, { promise: resolveAfter("c", 2) }],
  };
}
