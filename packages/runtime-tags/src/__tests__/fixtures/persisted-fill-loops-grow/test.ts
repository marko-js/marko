import type { TestConfig } from "../../main.test";

// Growing a NESTED loop constructs an item whose hole mixes the loop item
// (never seeded) with state: no shell ships, so the growth fails closed.
export const config: TestConfig = {
  persisted: true,
  expect_rejection: true,
  steps: [
    { rows: [{ id: "r1", cells: ["a"] }], suffix: "x" },
    { rows: [{ id: "r1", cells: ["a", "b"] }], suffix: "x" },
  ],
};
