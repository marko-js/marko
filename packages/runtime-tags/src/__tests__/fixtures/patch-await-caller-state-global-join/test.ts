import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// One hole joins the client's value and `$global`, which a patch writes.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  // Step 2's promise is ignored: the `<let>` keeps its client value, the case under test.
  steps: () => [
    { promise: Promise.resolve("a"), ...globals("acme") },
    wait,
    shows("acme:a"),
    { promise: Promise.resolve("b"), ...globals("bmce") },
    wait,
    shows("bmce:a"),
    clickSwap,
    wait,
    shows("bmce:swapped"),
    { promise: Promise.resolve("c"), ...globals("cmce") },
    wait,
    shows("cmce:swapped"),
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
