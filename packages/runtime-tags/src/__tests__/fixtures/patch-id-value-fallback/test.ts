import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: [
    {
      heading: "provided-heading",
      items: [{ key: "a", uid: "provided-a" }, { key: "b" }],
    },
    checkIds,
    {
      heading: undefined,
      items: [{ key: "b" }, { key: "c", uid: "provided-c" }],
    },
    checkIds,
    click,
    checkIds,
    {
      heading: false,
      items: [
        { key: "b", uid: "provided-b" },
        { key: "c", uid: 0 },
      ],
    },
    checkIds,
    click,
    checkIds,
    {
      heading: "provided-heading",
      items: [{ key: "c" }, { key: "d", uid: false }],
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

function click(document: Document) {
  document.querySelector("button")!.click();
}
