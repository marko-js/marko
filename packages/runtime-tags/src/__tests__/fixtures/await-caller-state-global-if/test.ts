import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// patch-await-caller-state-global-if without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { promise: Promise.resolve("a"), ...globals(false) },
    wait,
    { promise: Promise.resolve("b"), ...globals(true) },
    wait,
    shows("a", false),
    clickSwap,
    wait,
    shows("swapped", false),
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
