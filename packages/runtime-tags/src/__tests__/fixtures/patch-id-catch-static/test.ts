import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { wait, navigate, rejectAfter } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: () => [
    { promise: Promise.resolve("ok") },
    wait,
    navigate(next),
    wait,
    check,
  ],
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

function next() {
  return { promise: rejectAfter(new Error("caught")) };
}
