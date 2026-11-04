import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
export const config: TestConfig = {
  equivalent: false,
  steps: () => {
    const rejected = Promise.reject(new Error("caught"));
    rejected.catch(ignore);
    return [
      { promise: Promise.resolve("ok") },
      wait,
      { promise: rejected },
      wait,
      check,
    ];
  },
};
function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id));
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  assert.equal(ids.size, 24);
}
function ignore() {}
