import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// patch-client-let-data-minus-zero without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", n: 0 },
    { label: "b", n: -0.0 },
    (document: Document) => {
      assert.strictEqual(document.querySelector("p")!.textContent, "f-bfalse");
    },
  ],
};
