import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";

// A client-settled `<await>` beside kept content its body never reads: the page
// ships no rejection code, and a patch creating it pending applies.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, label: "a", promise: "z" },
    check,
    navigate(() => ({ show: true, label: "b", promise: resolveAfter("y") })),
    check,
  ],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
