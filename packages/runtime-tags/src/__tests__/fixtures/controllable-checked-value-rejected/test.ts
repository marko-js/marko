import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

function clickB(document: Document) {
  document.querySelectorAll(`input`)[1]!.click();
}

function assertGroupReverted(document: Document) {
  assert.deepEqual(
    [...document.querySelectorAll(`input`)].map(
      (input) => (input as HTMLInputElement).checked,
    ),
    [true, false],
  );
}

export const config: TestConfig = {
  steps: [{}, clickB, assertGroupReverted],
};
