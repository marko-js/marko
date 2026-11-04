import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { rejectAfter, wait } from "../../utils/resolve";
// Ids in a document's `@catch` stay unique and linked; a patch rendering the
// body reloads.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: () => [
    { promise: rejectAfter(new Error("initial")) },
    wait,
    checkIds,
    { promise: Promise.resolve([{ key: "a" }]) },
  ],
};
function checkIds(document: Document) {
  const seen = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!seen.has(input.id));
    seen.add(input.id);
    assert.equal(input.labels?.length, 1);
    assert(document.getElementById(input.getAttribute("aria-describedby")!));
  }
  assert(seen.size > 0);
}
