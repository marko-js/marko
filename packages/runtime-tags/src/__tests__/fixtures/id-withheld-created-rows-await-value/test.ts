import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A client row's `<await>` renders content under an `<if>` on its value.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: resolveAfter("") },
    wait,
    { show: true, label: "b", promise: resolveAfter("") },
    wait,
    check,
    { show: true, label: "c", promise: resolveAfter("y") },
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
