import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A body whose copy never settles reads the value (a `<define>` param's group and the
// caller state's) in an effect: the client's render runs it, so no patch waits.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { label: "a", promise: Promise.resolve("a") },
    wait,
    { label: "b", promise: new Promise(never) },
    wait,
    ran,
    clickSwap,
    wait,
    ran,
  ],
};

function never() {}

function ran(document: Document) {
  const text = document.querySelector("p")!.textContent;
  assert.equal(document.body.dataset.v, text);
}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
