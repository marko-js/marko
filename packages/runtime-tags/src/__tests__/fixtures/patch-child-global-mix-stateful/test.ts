import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.dataset.z, text);
};
const globals = (flag: string, mark: string) => ({
  $global: { flag, mark, serializedGlobals: ["flag", "mark"] },
});

// A child value mixing a constant param with `$global` in stateful structure,
// which patches skip: the page writes it for the client's join to re-run.
export const config: TestConfig = {
  patches: true,
  steps: [globals("1", "x"), globals("1", "y"), shows("a1y")],
};
