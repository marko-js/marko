import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// A `<let>` holds an array whose function reads `this`: the client calls it on
// the array it keeps, so the page shows `old-b`.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", n: "old-" },
    { label: "b", n: "new-" },
    (document: Document) => {
      assert.strictEqual(document.querySelector("p")!.textContent, "old-b");
    },
  ],
};
