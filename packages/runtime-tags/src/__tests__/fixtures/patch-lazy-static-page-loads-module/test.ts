import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { release, wait } from "../../utils/resolve";

// A lazy page with nothing but markup arrives in its parent's shell, yet its
// patch still names its module (whose CSS it needs) and waits for it.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["page"],
  steps: [
    { show: false },
    { show: true },
    (document: Document) => assert.equal(document.querySelector("h1"), null),
    release,
    wait,
  ],
};
