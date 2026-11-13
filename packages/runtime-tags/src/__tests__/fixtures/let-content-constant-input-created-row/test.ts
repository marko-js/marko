import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", rows: [{ id: 1 }] },
    check,
    { label: "b", rows: [{ id: 1 }, { id: 2 }] },
    check,
  ],
};

function check(document: Document) {
  for (const span of document.querySelectorAll("span")) {
    assert.equal(span.textContent, "new");
  }
}
