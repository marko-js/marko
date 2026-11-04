import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  // An await in each row's await body: the inner one starts while the outer
  // body renders later.
  steps: () => [
    {
      items: ["a", "b"].map(item),
    },
    wait,
    flush,
    wait,
    flush,
    check,
  ],
};

function item(key: string) {
  return { key, outer: resolveAfter(key, 1), inner: resolveAfter(key, 2) };
}

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  assert.equal(ids.size, 2);
}
