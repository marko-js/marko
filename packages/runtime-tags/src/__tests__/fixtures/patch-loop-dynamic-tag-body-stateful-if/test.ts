import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

const toggleAll = (document: Document) => {
  for (const button of document.querySelectorAll("button")) button.click();
};
const labels = (expected: string[]) => (document: Document) =>
  assert.deepEqual(
    Array.from(document.querySelectorAll("b"), (b) => b.textContent),
    expected,
  );

// A row's dynamic tag body its renderer shows under client state renders the
// row's value wherever the client creates it, in a patch and after.
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
    toggleAll,
    toggleAll,
    labels(["a", "b"]),
  ],
};
