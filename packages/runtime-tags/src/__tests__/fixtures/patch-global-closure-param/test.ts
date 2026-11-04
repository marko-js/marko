import assert from "node:assert";

import type { TestConfig } from "../../main.test";

const shows = (text: string) => (document: Document) => {
  assert.equal(document.querySelector("p")!.dataset.z, text);
};
const step = (v: string, flag: string, mark: string) => ({
  v,
  $global: { flag, mark, serializedGlobals: ["flag", "mark"] },
});

// A content closure mixing a param with `$global`, read by a join in a child's
// content: a key change re-runs it, and a param change re-renders it.
export const config: TestConfig = {
  patches: true,
  steps: [
    step("a", "1", "x"),
    step("a", "1", "y"),
    shows("a1y"),
    step("b", "2", "y"),
    shows("b2y"),
  ],
};
