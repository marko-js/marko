import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { prefix: "old" },
    checkIds,
    { prefix: "next" },
    checkIds,
    click,
    click,
    checkIds,
    { prefix: "after" },
    checkIds,
  ],
};
function click(document: Document) {
  document.querySelector("button")!.click();
}
function checkIds(document: Document) {
  const input = document.querySelector("input")!;
  assert(input);
  assert.equal(input.labels?.length, 1);
  assert(input.title.endsWith(" " + input.id), input.title + " / " + input.id);
  assert.equal(input.labels![0].textContent, input.title);
}
