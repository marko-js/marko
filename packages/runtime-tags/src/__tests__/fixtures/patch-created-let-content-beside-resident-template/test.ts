import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A template a shell names keeps its registration on a page that binds content
// by its shell.
export const config: TestConfig = {
  patches: true,
  steps: [
    { which: true, label: "a", show: false },
    { which: false, label: "b", show: true },
    { which: false, label: "c", show: true },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button")!.click(),
    (document: Document) =>
      assert.equal(document.querySelectorAll("i").length, 2),
  ],
};
