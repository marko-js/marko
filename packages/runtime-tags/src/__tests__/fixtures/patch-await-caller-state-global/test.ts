import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const globals = (brand: string) => ({
  $global: { brand, serializedGlobals: ["brand"] },
});
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

// The body reads the client's value and `$global`, which a patch writes.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve("a"), ...globals("acme") },
    wait,
    shows("acme:a"),
    { promise: Promise.resolve("b"), ...globals("bmce") },
    wait,
    shows("bmce:a"),
  ],
};
