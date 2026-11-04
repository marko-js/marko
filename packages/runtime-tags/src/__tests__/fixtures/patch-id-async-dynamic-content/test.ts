import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
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
    navigate(next1, checkIds),
    wait,
    checkIds,
    navigate(next2, checkIds),
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

function next1() {
  return {
    loaded: true,
    items: [
      { key: "b", promise: resolveAfter("b") },
      { key: "c", promise: resolveAfter("c", 2) },
    ],
  };
}

function next2() {
  return {
    loaded: false,
    items: [
      { key: "c", promise: resolveAfter("c") },
      { key: "a", promise: resolveAfter("a", 2) },
    ],
  };
}
