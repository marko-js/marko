import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { flush, resolveAfter, wait } from "../../utils/resolve";

// The client's promise, set while the server's body streams, settles the
// await once that body lands.
export const config: TestConfig = {
  equivalent: false,
  patch_while_streaming: true,
  steps: () => [
    { label: "a", promise: resolveAfter(2) },
    clickSwap,
    wait,
    { label: "b", promise: resolveAfter(2) },
    wait,
    flush,
    wait,
    assertClientResult,
  ],
};

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}

function assertClientResult(document: Document) {
  assert.match(document.querySelector("p")!.textContent!, /:client$/);
}
