import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const globals = (brand: string) => ({
  $global: { brand, serializedGlobals: ["brand"] },
});
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("span")!.textContent, text);
};

// A `<try>` in the body writes a `$global` hole of its own.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: () => [
    { promise: Promise.resolve("a"), ...globals("acme") },
    wait,
    shows("acme"),
    { promise: Promise.resolve("b"), ...globals("bmce") },
    wait,
    shows("bmce"),
  ],
};
