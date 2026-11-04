import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// patch-await-caller-state-global-join without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    { promise: Promise.resolve("a"), ...globals("acme") },
    wait,
    shows("acme:a"),
    { promise: Promise.resolve("b"), ...globals("bmce") },
    wait,
    shows("acme:a"),
    clickSwap,
    wait,
    shows("acme:swapped"),
    { promise: Promise.resolve("c"), ...globals("cmce") },
    wait,
    shows("acme:swapped"),
  ],
};

function globals(brand: string) {
  return { $global: { brand, serializedGlobals: ["brand"] } };
}

function shows(text: string) {
  return (document: Document) => {
    assert.equal(document.querySelector("p")!.textContent, text);
  };
}

function clickSwap(document: Document) {
  document.querySelector<HTMLButtonElement>("button.swap")!.click();
}
