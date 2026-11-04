import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  // Two dynamic tags on client state, which no patch writes, then the page's
  // own id.
  steps: [{}, checkIds, click, click, checkIds],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}

function checkIds(document: Document) {
  const seen = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!seen.has(input.id), "duplicate " + input.id);
    seen.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  assert.equal(seen.size, 3);
}
