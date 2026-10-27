import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};
const globals = (flag: string, mark: string) => ({
  $global: { flag, mark, serializedGlobals: ["flag", "mark"] },
});

// A child's text mixing a constant param with `$global`, in stateful structure:
// the `$global` source keeps its marker, so the client's join finds the node.
export const config: TestConfig = {
  patches: true,
  steps: [globals("1", "x"), globals("1", "y"), shows("a1y")],
};
