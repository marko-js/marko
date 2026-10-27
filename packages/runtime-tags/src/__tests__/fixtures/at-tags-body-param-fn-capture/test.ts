import type { TestConfig } from "../../main.test";

// The plain twin: a client render re-runs the child's effect, a resumed page
// keeps the document's value.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a" }, { v: "b" }, { v: "b" }],
};
