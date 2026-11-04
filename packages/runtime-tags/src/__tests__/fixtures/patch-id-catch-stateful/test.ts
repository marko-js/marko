import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [{}, check, click, check],
};
function click(document: Document) {
  document.querySelector("button")!.click();
}
function check(document: Document) {
  const input = document.querySelector("input")!;
  assert(input);
  assert.equal(input.labels?.length, 1);
  assert.equal(input.labels![0].textContent, "caught");
}
