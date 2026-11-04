import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  // A later update hits a gap of its own: the patch binds the passed
  // `<define>` body, which the client neither registers nor resolves.
  steps: [
    {
      items: [
        { key: "a", on: true },
        { key: "b", on: false },
      ],
    },
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
