import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const page = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const sum = (text: string) => (document: Document) => {
  assert.equal(document.body.dataset.sum, text);
};

// A hole and an effect reading a `$global` key and two states no other intersection reads:
// the effect runs once the intersection renders, on a client update and on a patch.
export const config: TestConfig = {
  patches: true,
  steps: [page("x"), sum("3x"), click, sum("5x"), page("y"), sum("5y")],
};
