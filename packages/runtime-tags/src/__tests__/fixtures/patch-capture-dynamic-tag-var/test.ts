import type { TestConfig } from "../../main.test";

// A dynamic tag's variable a function passed to a child captures.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, { v: "b" }, { v: "b" }],
};
