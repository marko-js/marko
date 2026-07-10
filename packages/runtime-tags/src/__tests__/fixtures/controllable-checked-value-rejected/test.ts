import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

function clickB(container: Element) {
  container.querySelectorAll(`input`)[1]!.click();
}

function assertGroupReverted(container: Element) {
  assert.deepEqual(
    [...container.querySelectorAll(`input`)].map(
      (input) => (input as HTMLInputElement).checked,
    ),
    [true, false],
  );
}

export const config: TestConfig = {
  steps: [{}, clickB, assertGroupReverted],
};
