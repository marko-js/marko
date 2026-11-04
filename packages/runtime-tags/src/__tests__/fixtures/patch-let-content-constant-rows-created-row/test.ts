import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";

// Constant rows inside id-less content a `<let>` holds: a row a patch adds
// renders them on the client.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { label: "a", rows: [{ id: 1 }] },
    check("a", 4),
    { label: "b", rows: [{ id: 1 }, { id: 2 }] },
    check("b", 8),
  ],
};

function check(label: string, rows: number) {
  return (document: Document) => {
    const items = document.querySelectorAll("b");
    assert.equal(items.length, rows, "rows");
    for (const item of items) assert.equal(item.textContent, label);
  };
}
