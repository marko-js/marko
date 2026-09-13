import type { TestConfig } from "../../main.test";

// Growing a NESTED loop constructs an item whose hole mixes the loop item
// with state: the item partial seeds it, so the new cell paints.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { rows: [{ id: "r1", cells: ["a"] }], suffix: "x" },
    { rows: [{ id: "r1", cells: ["a", "b"] }], suffix: "x" },
  ],
};
