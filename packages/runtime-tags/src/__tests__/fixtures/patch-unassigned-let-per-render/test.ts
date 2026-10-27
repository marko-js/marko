import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// A never-assigned `<let>` whose initial value differs per render, joined with
// server input, that no client code reads: a patch writes the server's value.
// No other render takes the same ids, so the page must agree with itself.
const agrees = (document: Document) => {
  assert.equal(
    document.querySelector("label")!.htmlFor,
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
  ],
};
