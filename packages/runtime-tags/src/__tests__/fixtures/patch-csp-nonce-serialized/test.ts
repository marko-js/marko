import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The client reads the document's nonce from its resume scripts: it stamps it
// on what it creates after a patch, and runs each flush with it.
function createdNonces(document: Document) {
  assert.deepEqual(
    [...document.querySelectorAll("style")].map((style) =>
      style.getAttribute("nonce"),
    ),
    ["doc"],
  );
}

export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { page: 0, $global: { cspNonce: "doc" } },
    wait,
    { page: 1, $global: { cspNonce: "patch" } },
    wait,
    createdNonces,
  ],
};
