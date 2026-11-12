import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const page = (x: string) => ({ $global: { x, serializedGlobals: ["x"] } });
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const sum = (text: string) => (document: Document) => {
  assert.equal(document.body.dataset.sum, text);
};

// An effect reading a `$global` key and two states no other intersection reads: a change
// to either state or the key re-runs it, once.
export const config: TestConfig = {
  patches: true,
  steps: [page("x"), sum("3x"), click, sum("5x"), page("y"), sum("5y")],
};
