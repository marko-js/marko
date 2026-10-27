import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

async function submit(document: Document) {
  const [submitter, counter] = document.querySelectorAll("button");
  const window = document.defaultView!;
  submitter.click();
  await Promise.resolve();
  assert.equal(submitter.disabled, false, "rendered before the form was read");

  await new Promise(window.requestAnimationFrame);
  assert.equal(submitter.disabled, true, "rendered in the next frame");

  await new Promise(setImmediate);
  counter.click();
  await Promise.resolve();
  assert.equal(counter.textContent, "1", "a later click renders at once");
}

export const config: TestConfig = {
  steps: [{}, submit],
};
