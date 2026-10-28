import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const globals = (flag: boolean) => ({
  $global: { flag, serializedGlobals: ["flag"] },
});

// patch-await-caller-state-global-if without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { promise: Promise.resolve("a"), ...globals(false) },
    wait,
    { promise: Promise.resolve("b"), ...globals(true) },
    wait,
    hidesOn,
  ],
};

function hidesOn(document: Document) {
  assert.ok(!document.querySelector("b"));
}
