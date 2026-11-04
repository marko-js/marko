import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const ran = (mode: string) => (document: Document) => {
  assert.equal(document.body.dataset.ran, mode);
};
const globals = (mode: string) => ({
  $global: { mode, serializedGlobals: ["mode"] },
});

// A handler picked by a `$global` key as the attribute renders: a patch
// changing the key binds the other handler.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [globals("a"), click, ran("a"), globals("b"), click, ran("b")],
};
