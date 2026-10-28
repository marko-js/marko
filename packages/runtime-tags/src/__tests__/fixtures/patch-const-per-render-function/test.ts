import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A `<const>` whose value differs per render, read only inside a function the
// child's handler calls: a patch writes the server's value, which the function
// then reads. No other render takes the same ids, so the page must agree with
// itself.
const agrees = (document: Document) => {
  assert.equal(
    document.querySelector("label")!.htmlFor,
    document.querySelector("input")!.id,
  );
};
const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shownAgrees = (document: Document) => {
  assert.equal(
    `${document.querySelector("output")!.textContent}-b`,
    document.querySelector("input")!.id,
  );
};
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  skip_csr: true,
  steps: [
    { name: "a", label: "A", value: "1" },
    { name: "b", label: "B", value: "2" },
    agrees,
    click,
    shownAgrees,
  ],
};
