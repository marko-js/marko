import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

// The `$global` join of `patch-global-join-unfillable` in a body a patch
// creates: the created scope takes the param's fill and re-runs the join.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    {
      show: false,
      n: 1,
      $global: { suffix: "a", serializedGlobals: ["suffix"] },
    },
    {
      show: true,
      n: 1,
      $global: { suffix: "b", serializedGlobals: ["suffix"] },
    },
    shows("1b"),
    {
      show: true,
      n: 5,
      $global: { suffix: "c", serializedGlobals: ["suffix"] },
    },
    shows("5c"),
    click,
    shows("6c"),
  ],
};
