import type { TestConfig } from "../../main.test";

// A child's tag variable a function passed to another child captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, { v: "b" }, { v: "b" }],
};
