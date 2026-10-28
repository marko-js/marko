import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A client-settled `<await>` beside kept content its body never reads.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: "z" },
    check,
    { show: true, label: "b", promise: resolveAfter("y") },
    wait,
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
