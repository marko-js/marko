import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

async function submit(document: Document) {
  const [submitter, counter] = document.querySelectorAll("button");
  const window = document.defaultView!;
  submitter.click();
  await Promise.resolve();
  assert.equal(
    submitter.disabled,
    false,
    "an act's render waits for the frame",
  );
  assert.equal(counter.textContent, "0", "so does the rest of its flush");

  await new Promise(window.requestAnimationFrame);
  assert.equal(submitter.disabled, true, "rendered in the next frame");
  assert.equal(counter.textContent, "1");

  await new Promise(setImmediate);
  counter.click();
  await Promise.resolve();
  assert.equal(counter.textContent, "2", "a flush with no act renders at once");
}

export const config: TestConfig = {
  steps: [{}, submit],
};
