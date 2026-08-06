import type { TestConfig } from "../../main.test";

// Growing a NESTED loop constructs an item at depth: its state-read hole
// is not a direct closure, so the shell drops and the patch fails closed.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { rows: [{ id: "r1", cells: ["a"] }], suffix: "x" },
    { rows: [{ id: "r1", cells: ["a", "b"] }], suffix: "x" },
  ],
};
