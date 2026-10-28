import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

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
const keepsCreated = (document: Document) => {
  assert.equal(document.querySelector("output")!.textContent, "u1");
};
// patch-unassigned-let-attr-join-handler without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { id: "u1", name: "a", label: "A", value: "1" },
    { id: "u2", name: "b", label: "B", value: "2" },
    agrees,
    click,
    shownAgrees,
    keepsCreated,
  ],
};
