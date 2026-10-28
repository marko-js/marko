import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// A created row's `<await>` renders content under an `<if>` on its value: that
// makes the content ship its code, so nothing is kept and each patch applies.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, label: "a", promise: resolveAfter("") },
    wait,
    navigate(() => ({ show: true, label: "b", promise: resolveAfter("") })),
    check,
    navigate(() => ({ show: true, label: "c", promise: resolveAfter("y") })),
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
