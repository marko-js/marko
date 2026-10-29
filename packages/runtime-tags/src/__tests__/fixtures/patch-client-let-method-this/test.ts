import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// A `<let>` holds an object whose method reads `this`: the client calls it on
// the object it keeps, so the page shows `old-b`.
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
