import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

const showAll = (document: Document) => {
  for (const button of document.querySelectorAll("button")) button.click();
};
const labels = (expected: string[]) => (document: Document) =>
  assert.deepEqual(
    Array.from(document.querySelectorAll("b"), (b) => b.textContent),
    expected,
  );

// A row's dynamic tag body, which its renderer binds into a child through a
// patch, renders the row's value once client state shows it after the patch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { wrap: true, rows: [{ id: 1, label: "a" }] },
    {
      wrap: true,
      rows: [
        { id: 1, label: "a" },
        { id: 2, label: "b" },
      ],
    },
    showAll,
    labels(["a", "b"]),
  ],
};
