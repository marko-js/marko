import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  steps: [
    { which: true, label: "a" },
    { which: false, label: "b" },
    { which: false, label: "c" },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button")!.click(),
    (document: Document) =>
      assert.equal(document.querySelectorAll("i").length, 2),
  ],
};
