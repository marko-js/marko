import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// An `<await>` of a promise that reads no source, its value read by a handler
// and joined with patched input: the value is the server's, so a patch writes
// it. No other render takes the same ids, so the page must agree with itself.
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shownAgrees = (document: Document) => {
  assert.equal(
    `${document.querySelector("output")!.textContent}-b`,
    document.querySelector("label")!.htmlFor,
  );
};
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  skip_csr: true,
  steps: [
    { name: "a", label: "A" },
    { name: "b", label: "B" },
    click,
    shownAgrees,
  ],
};
