import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ key: "a" }, { key: "b" }] },
    { items: [{ key: "b" }, { key: "c" }] },
    checkReferences,
  ],
};

function checkReferences(document: Document) {
  for (const input of document.querySelectorAll("input")) {
    const id = input.getAttribute("aria-describedby")!;
    assert.equal(document.getElementById(id)?.textContent, "Fields");
  }
}
