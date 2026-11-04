import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".n")!.click();
};
const check = (document: Document) => {
  assert.deepEqual(
    [...document.querySelectorAll("li")].map((li) => li.textContent),
    ["c:y1", "d:y1"],
  );
};

// A loop param read beside a root value derived from server input and
// client state: each row's item must fill so the client recomputes the join.
export const config: TestConfig = {
  patches: true,
  steps: [
    { prefix: "x", items: ["a", "b"] },
    click,
    { prefix: "y", items: ["c", "d"] },
    check,
  ],
};
