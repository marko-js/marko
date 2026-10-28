import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { prefix: "old" },
    check,
    { prefix: "next" },
    check,
    click,
    click,
    check,
    { prefix: "after" },
    check,
  ],
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
    assert.equal(input.labels![0].textContent, input.title);
    assert(input.title.endsWith(" " + input.id));
  }
  assert.equal(ids.size, 2);
}
