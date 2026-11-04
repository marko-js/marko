import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".n")!.click();
};
const check = (document: Document) => {
  assert.deepEqual(
    [...document.querySelectorAll("li")].map((li) => li.textContent),
    ["c:1", "d:1"],
  );
};

// A loop param read with root client state: the join is the client's, so
// the item value must still fill each row for the client to recompute it.
export const config: TestConfig = {
  patches: true,
  steps: [{ items: ["a", "b"] }, click, { items: ["c", "d"] }, check],
};
