import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

async function submit(document: Document) {
  const button = document.querySelector("button")!;
  button.click();
  await Promise.resolve();
  assert.equal(button.disabled, false, "rendered before the form was read");
}

export const config: TestConfig = {
  steps: [{}, submit],
};
