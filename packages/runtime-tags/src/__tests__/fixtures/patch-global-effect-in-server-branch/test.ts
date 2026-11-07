import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// An effect reading `$global` in a branch the server renders: a patch changing the key
// re-runs it on the resumed branch, which its owner reaches through the branch.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, $global: { brand: "a", serializedGlobals: ["brand"] } },
    { show: true, $global: { brand: "b", serializedGlobals: ["brand"] } },
    (document: Document) => assert.equal(document.body.dataset.brand, "b"),
  ],
};
