import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  equivalent: false,
  steps: [
    {
      items: [{ key: "a" }, { key: "b" }],
      record: { a: 1, b: 2 },
      start: 0,
      end: 3,
    },
    expectFields(20),
    {
      items: [{ key: "b" }, { key: "c" }],
      record: { b: 2, c: 3 },
      start: 1,
      end: 5,
    },
    expectFields(22),
    { items: [], record: {}, start: 0, end: 0 },
    expectFields(2),
    { items: [{ key: "c" }], record: { c: 4 }, start: -2, end: 2 },
    expectFields(18),
    {
      items: [{ key: "a" }, { key: "b" }, { key: "c" }],
      record: { a: 1, b: 2, c: 3 },
      start: 0,
      end: 4,
    },
    expectFields(26),
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

function expectFields(count: number) {
  return (document: Document) => {
    checkIds(document);
    assert.equal(
      document.querySelectorAll<HTMLInputElement>("input[id]").length,
      count,
    );
  };
}
