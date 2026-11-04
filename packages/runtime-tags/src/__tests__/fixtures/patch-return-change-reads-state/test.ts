import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const append = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

// A `<return>` change handler reading the child's own state, which is the
// client's: only a created scope takes it, and a patch leaves it bound.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ v: "a" }, { v: "b" }, shows("a"), append, shows("a!")],
};
