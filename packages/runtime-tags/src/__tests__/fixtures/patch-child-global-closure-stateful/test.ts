import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("i")!.dataset.z, text);
};
const globals = (w: string, flag: string, mark: string) => ({
  w,
  $global: { flag, mark, serializedGlobals: ["flag", "mark"] },
});

// A child's branch reading a closure mixed with `$global`, in stateful
// structure, under a constant group: the page links it for the client's join.
export const config: TestConfig = {
  patches: true,
  steps: [globals("w", "1", "x"), globals("w", "1", "y"), shows("a1y")],
};
