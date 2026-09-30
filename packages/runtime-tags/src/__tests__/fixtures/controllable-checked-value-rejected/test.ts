import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

function assertGroupReverted(document: Document) {
  assert.deepEqual(
    [...document.querySelectorAll(`input`)].map(
      (input) => (input as HTMLInputElement).checked,
    ),
    [true, false],
  );
}

export const config: TestConfig = {
  steps: [{}, click("input", 1), assertGroupReverted],
};
