import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

// A `<let>` defaulted from a `$global` key is seeded once, as one defaulted
// from input is: a patch changing the key leaves the live value alone.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { $global: { suffix: "a", serializedGlobals: ["suffix"] } },
    { $global: { suffix: "b", serializedGlobals: ["suffix"] } },
    shows("a"),
  ],
};
