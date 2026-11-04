import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";
const steps: TestConfig["steps"] = () => {
  const rejected = Promise.reject(new Error("caught"));
  rejected.catch(ignoreRejection);
  return [
    { promise: Promise.resolve([{ key: "a" }, { key: "b" }]) },
    wait,
    checkIds,
    { promise: Promise.resolve([{ key: "b" }, { key: "c" }]) },
    wait,
    checkIds,
    { promise: rejected },
    wait,
    checkIds,
    { promise: Promise.resolve([{ key: "d" }, { key: "b" }]) },
    wait,
    checkIds,
  ];
};
export const config: TestConfig = { equivalent: false, steps };
function ignoreRejection() {}

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
