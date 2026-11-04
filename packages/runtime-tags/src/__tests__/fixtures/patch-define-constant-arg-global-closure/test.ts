import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.dataset.z, text);
};
const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `<define>` closure joining a param every call passes as a constant with
// `$global`: only the global gates its write, as a page renders it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { $global: { flag: "1", mark: "x", serializedGlobals: ["flag", "mark"] } },
    { $global: { flag: "1", mark: "y", serializedGlobals: ["flag", "mark"] } },
    shows("a1y"),
    click,
    { $global: { flag: "2", mark: "y", serializedGlobals: ["flag", "mark"] } },
    shows("a2y"),
  ],
};
