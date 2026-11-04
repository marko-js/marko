import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [{ show: false }, { show: true }, click, check],
};
function click(document: Document) {
  for (const button of document.querySelectorAll("button")) button.click();
}
function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id));
    ids.add(input.id);
    assert.equal(input.labels?.length, 1);
  }
  for (const p of document.querySelectorAll("p"))
    assert(p.textContent!.endsWith(":1"));
}
