import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// An `<if>` joins the client's value and `$global`, which a patch writes.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  // Step 2's promise is ignored: the `<let>` keeps its client value, the case under test.
  steps: () => [
    { promise: Promise.resolve("a"), ...globals(false) },
    wait,
    { promise: Promise.resolve("b"), ...globals(true) },
    wait,
    shows("a", true),
    clickSwap,
    wait,
    shows("swapped", true),
    { promise: Promise.resolve("c"), ...globals(false) },
    wait,
    shows("swapped", false),
  ],
};

function globals(flag: boolean) {
  return { $global: { flag, serializedGlobals: ["flag"] } };
}

function shows(text: string, on: boolean) {
  return (document: Document) => {
    assert.equal(document.querySelector("p")!.textContent, text);
    assert.equal(!!document.querySelector("b"), on);
  };
}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
