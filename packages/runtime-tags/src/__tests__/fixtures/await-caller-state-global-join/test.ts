import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const globals = (brand: string) => ({
  $global: { brand, serializedGlobals: ["brand"] },
});
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

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
  ],
};
