import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// A `<let>` holds data the init changes from `0` to `-0`: the client keeps `0`.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { label: "a", n: 0 },
    { label: "b", n: -0.0 },
    (document: Document) => {
      assert.strictEqual(document.querySelector("p")!.textContent, "f-bfalse");
    },
  ],
};
