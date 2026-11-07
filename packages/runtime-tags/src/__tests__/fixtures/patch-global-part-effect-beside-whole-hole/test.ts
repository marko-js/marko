import assert from "node:assert";

import type { TestConfig } from "../../main.test";

// A `$global` member read as a hole the patch fills, and a part of it in an effect:
// the part runs on its own key, not as a forward of the member.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { meta: { title: "a" }, serializedGlobals: ["meta"] } },
    { $global: { meta: { title: "bb" }, serializedGlobals: ["meta"] } },
    (document: Document) => assert.equal(document.body.dataset.flag, "2"),
  ],
};
