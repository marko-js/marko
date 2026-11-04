import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// The page's own client rows render kept content: each row's instance keeps its
// `<id>`, and a patch updates its holes through its row.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, check, { label: "b" }, check],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
