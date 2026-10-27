import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};
const globals = (suffix: string) => ({
  $global: { suffix, serializedGlobals: ["suffix"] },
});

// A constant mixed with `$global` at a call site in a child: the `$global`
// source gives the group a server bit, so each patch fills the value.
export const config: TestConfig = {
  patches: true,
  steps: [globals("1"), globals("2"), shows("a2")],
};
