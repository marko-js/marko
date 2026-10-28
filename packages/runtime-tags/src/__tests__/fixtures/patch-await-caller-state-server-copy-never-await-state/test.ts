import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The server's copy never settles, and the body holds client state, a hole of it
// and an `<await>` of it, which no patch writes: no patch waits on the copy.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    { label: "b", promise: new Promise(never) },
    wait,
    showsInner,
  ],
};

function never() {}

function showsInner(document: Document) {
  assert.equal(document.querySelector("b")!.textContent, "k");
}
