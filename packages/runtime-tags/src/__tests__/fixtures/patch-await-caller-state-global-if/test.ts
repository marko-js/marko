import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const globals = (flag: boolean) => ({
  $global: { flag, serializedGlobals: ["flag"] },
});

// An `<if>` joins the client's value and `$global`, which a patch writes.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve("a"), ...globals(false) },
    wait,
    { promise: Promise.resolve("b"), ...globals(true) },
    wait,
    showsOn,
  ],
};

function showsOn(document: Document) {
  assert.ok(document.querySelector("b"));
}
