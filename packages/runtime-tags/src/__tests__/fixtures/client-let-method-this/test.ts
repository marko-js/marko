import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// patch-client-let-method-this without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", n: "old-" },
    { label: "b", n: "new-" },
    (document: Document) => {
      assert.strictEqual(document.querySelector("p")!.textContent, "old-b");
    },
  ],
};
