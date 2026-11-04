import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The server's copy never settles, and the body reads only its value, in a hole
// and an effect: no patch waits on it.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    { label: "b", promise: new Promise(never) },
    wait,
    titled("a"),
  ],
};

function never() {}

function titled(text: string) {
  return (document: Document) => assert.equal(document.title, text);
}
