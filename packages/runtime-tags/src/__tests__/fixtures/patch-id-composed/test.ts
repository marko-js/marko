import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    { items: [{ key: "a" }, { key: "b" }] },
    { items: [{ key: "b" }, { key: "c" }] },
    checkIds,
  ],
};

function checkIds(document: Document) {
  const ids = new Set<string>();
  for (const input of document.querySelectorAll("input")) {
    assert(!ids.has(input.id), "duplicate id: " + input.id);
    ids.add(input.id);
    assert.equal(
      document.getElementById(input.getAttribute("aria-describedby")!)
        ?.textContent,
      "Fields",
    );
    assert.equal(input.labels?.length, 1);
  }
}
