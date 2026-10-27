import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("button")!.textContent, text);
};

// A `<let>` defaulted from input is seeded once, as in a client render: a
// patch changing the input leaves the live value alone, before and after
// the client assigns it.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { n: 1 },
    { n: 5 },
    shows("1"),
    click,
    shows("2"),
    { n: 9 },
    shows("2"),
  ],
};
