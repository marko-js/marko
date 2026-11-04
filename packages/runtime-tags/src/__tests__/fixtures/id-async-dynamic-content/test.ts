import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
export const config: TestConfig = {
  equivalent: false,
  steps: () => [
    {
      loaded: false,
      items: [
        { key: "a", promise: Promise.resolve("a") },
        { key: "b", promise: Promise.resolve("b") },
      ],
    },
    wait,
    checkIds,
    {
      loaded: true,
      items: [
        { key: "b", promise: Promise.resolve("b") },
        { key: "c", promise: Promise.resolve("c") },
      ],
    },
    wait,
    checkIds,
    {
      loaded: false,
      items: [
        { key: "c", promise: Promise.resolve("c") },
        { key: "a", promise: Promise.resolve("a") },
      ],
    },
    wait,
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
