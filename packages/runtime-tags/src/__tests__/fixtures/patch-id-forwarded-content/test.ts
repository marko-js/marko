import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Content a caller passes decides whether a child forwarding it links for ids,
// through bodies, `content=` and `<define>`s; a template a name holds always does.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [{ show: false }, check, { show: true }, check],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
