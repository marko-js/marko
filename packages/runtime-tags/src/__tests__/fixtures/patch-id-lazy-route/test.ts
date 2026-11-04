import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { $global: { n: 5 } },
    wait,
    checkIds,
    click,
    { $global: { n: 6 } },
    wait,
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
}
