import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};
const globals = (suffix: string) => ({
  $global: { suffix, serializedGlobals: ["suffix"] },
});

// Client state mixed with `$global` at a call site: the call site's join
// re-runs on a key change and hands the child the new value.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [globals("a"), click, shows("1a"), globals("b"), shows("1b")],
};
