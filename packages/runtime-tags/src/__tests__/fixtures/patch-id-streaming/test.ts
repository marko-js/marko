import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { navigate, resolveAfter, rejectAfter, wait } from "../../utils/resolve";
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  equivalent: false,
  steps: () => [
    { promise: resolveAfter([{ key: "a" }, { key: "b" }]) },
    wait,
    checkIds,
    navigate(next1, checkIds),
    checkIds,
    navigate(next2, checkIds),
    checkIds,
    navigate(next3, checkIds),
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
  return { promise: resolveAfter([{ key: "b" }, { key: "c" }]) };
}

function next2() {
  return { promise: rejectAfter(new Error("caught")) };
}

function next3() {
  return { promise: resolveAfter([{ key: "d" }, { key: "b" }]) };
}
