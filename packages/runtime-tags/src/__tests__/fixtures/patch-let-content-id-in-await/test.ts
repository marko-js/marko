import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter } from "../../utils/resolve";
function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
export const config: TestConfig = {
  patches: true,
  steps: () => [
    { show: false, label: "a", p: Promise.resolve("x") },
    navigate(() => ({ show: true, label: "b", p: resolveAfter("y") })),
    check,
    navigate(() => ({ show: true, label: "c", p: resolveAfter("z") })),
    check,
  ],
};
