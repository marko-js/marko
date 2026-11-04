import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

// A `$global` join reading a value no patch fills, derived from a dynamic
// body's param and a known child's: the client re-runs it where it owns them.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
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
    shows("1b"),
    click,
    {
      show: true,
      n: 1,
      $global: { suffix: "c", serializedGlobals: ["suffix"] },
    },
    shows("2c"),
  ],
};
