import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { flip: false, items: [{ key: "a" }, { key: "b" }] },
    checkIds,
    { flip: true, items: [{ key: "b" }, { key: "c" }] },
    checkIds,
    { flip: false, items: [{ key: "c" }, { key: "a" }] },
    checkIds,
  ],
};

function checkIds(document: Document) {
  const seen = new Set<string>();
  for (const element of document.querySelectorAll("[id]")) {
    assert(!seen.has(element.id), "duplicate id: " + element.id);
    seen.add(element.id);
  }
  for (const input of document.querySelectorAll<HTMLInputElement>(
    "input[id]",
  )) {
    assert.equal(input.labels?.length, 1, input.outerHTML);
    const ref = input.getAttribute("aria-describedby");
    if (ref) assert(document.getElementById(ref), "missing reference: " + ref);
  }
}
