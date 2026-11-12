import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// A `$global` key read as a hole the patch fills, and a path under it in an effect: the
// effect runs by the path's own registration, not as a forward of the key.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { meta: { title: "a" }, serializedGlobals: ["meta"] } },
    { $global: { meta: { title: "bb" }, serializedGlobals: ["meta"] } },
    (document: Document) => assert.equal(document.body.dataset.flag, "2"),
  ],
};
