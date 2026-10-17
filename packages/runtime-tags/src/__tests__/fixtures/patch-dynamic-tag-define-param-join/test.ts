import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};
const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.textContent, text);
};

// A `<define>` a dynamic tag renders from its shell joins its param with a
// child's state: the patch fills the param, and a kept or created body
// derives the join anew.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { show: true, n: 1 },
    click,
    shows("2"),
    { show: true, n: 5 },
    shows("6"),
    { show: false, n: 5 },
    { show: true, n: 1 },
    shows("1"),
    { show: true, n: 5 },
    shows("5"),
    click,
    shows("6"),
  ],
};
