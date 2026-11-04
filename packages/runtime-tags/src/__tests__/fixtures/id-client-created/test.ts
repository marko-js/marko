import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ key: "a" }, { key: "b" }], prefix: "old" },
    click,
    { items: [{ key: "a" }, { key: "b" }], prefix: "next" },
    checkReferences,
  ],
};
function click(document: Document) {
  document.querySelector("button")!.click();
}
function checkReferences(document: Document) {
  for (const input of document.querySelectorAll("input")) {
    const id = input.getAttribute("aria-describedby")!;
    assert(document.getElementById(id));
    assert.equal(input.title, "next " + id);
  }
}
