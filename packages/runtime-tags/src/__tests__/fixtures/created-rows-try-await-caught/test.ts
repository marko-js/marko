import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { rejectAfter, wait } from "../../utils/resolve";

// A client row awaits a promise that rejects inside a `<try>`.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: 0 },
    check,
    { show: true, label: "b", promise: rejectAfter(new Error("probe")) },
    wait,
    check,
    { show: true, label: "c", promise: 0 },
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
