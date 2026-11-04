import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

// A `$global` join of a dynamic body's param and a constant a known child's
// call passes: its mask is the server's constant, so a patch fills the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    {
      show: true,
      n: 1,
      $global: { suffix: "a", serializedGlobals: ["suffix"] },
    },
    {
      show: true,
      n: 1,
      $global: { suffix: "b", serializedGlobals: ["suffix"] },
    },
    shows("2b"),
    click,
    {
      show: true,
      n: 2,
      $global: { suffix: "c", serializedGlobals: ["suffix"] },
    },
    shows("3c"),
  ],
};
