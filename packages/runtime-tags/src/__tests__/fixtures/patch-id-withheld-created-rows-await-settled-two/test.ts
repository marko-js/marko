import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A created scope's two client rows await a promise settled before the creating
// flush: their bodies render after every entry, so the patch rejects there.
export const config: TestConfig = {
  // Debug logs the rejection's reason, which optimize cannot.
  skip_parity: true,
  patches: true,
  expect_rejection: true,
  steps: [{ show: false, label: "a" }, check, { show: true, label: "b" }],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
