import assert from "node:assert";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};
const globals = (suffix: string) => ({
  $global: { suffix, serializedGlobals: ["suffix"] },
});

// An `<await>` of client state mixed with `$global` resolves on the client
// when its join re-runs, so a patch ships no Pending entry for it.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    globals("a"),
    click,
    wait,
    shows("1a"),
    globals("b"),
    wait,
    shows("1b"),
  ],
};
