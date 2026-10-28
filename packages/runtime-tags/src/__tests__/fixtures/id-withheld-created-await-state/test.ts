import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { resolveAfter, wait } from "../../utils/resolve";

// A promise client state holds, around kept content: its `<id>` renders once it
// settles.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { show: false, label: "a", promise: resolveAfter("x") },
    wait,
    check,
    { show: true, label: "b", promise: resolveAfter("y") },
    wait,
    check,
    { show: false, label: "c", promise: "z" },
    { show: true, label: "d", promise: "z" },
    check,
    { show: true, label: "e", promise: resolveAfter("v") },
    wait,
    check,
    { show: false, label: "f", promise: "z" },
    { show: true, label: "g", promise: resolveAfter("w") },
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
