import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";

// A created scope's client row awaits a promise around kept content: the client
// renders the body after every entry, so the patch rejects, in the flush its
// body lands in or the one creating the row, and the document loads. A ready
// value renders with the row, and a row the page holds updates in place.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: () => [
    { show: false, label: "a", promise: resolveAfter("x") },
    wait,
    check,
    navigate(
      () => ({ show: true, label: "b", promise: resolveAfter("y") }),
      pending,
    ),
    // What the rejected patch left, the document load replaces.
    { show: false, label: "c", promise: "z" },
    { show: true, label: "d", promise: "z" },
    check,
    { show: true, label: "e", promise: resolveAfter("v") },
    wait,
    check,
    { show: false, label: "f", promise: "z" },
    { show: true, label: "g", promise: resolveAfter("w") },
    wait,
  ],
};

// The first flush created the row, its body still pending.
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
