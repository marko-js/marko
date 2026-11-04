import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// A created scope's client row awaits a promise around content a `<let>` holds:
// the body's `<id>` renders once it settles; a live row updates in place.
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, label: "a", promise: resolveAfter("x") },
    wait,
    check,
    navigate(showPending, pending),
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

// The first flush created the scope, its body still pending.
function pending(document: Document) {
  assert(document.querySelector("button"), "row's owner");
  assert.equal(document.querySelector("input"), null);
}

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}

function showPending() {
  return { show: true, label: "b", promise: resolveAfter("y") };
}
