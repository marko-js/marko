import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

const click = (d: Document) =>
  d.querySelector<HTMLButtonElement>("button")?.click();

// Client code shows the `<else>` of a chain around kept content: a patch creating
// structure inside it leaves that branch alone.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    check,
    { show: true, label: "b" },
    check,
    click,
    { show: false, label: "c" },
    { show: true, label: "d" },
    check,
  ],
};

function check(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate " + input.id);
    ids.add(input.id);
    assert.equal(input.labels?.length, 1, "labels of " + input.id);
  }
}
