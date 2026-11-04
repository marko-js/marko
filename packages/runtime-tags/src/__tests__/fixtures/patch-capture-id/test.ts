import type { TestConfig } from "../../main.test";

// An `<id>` a function passed to a child captures: its effect re-runs once per change.
export const config: TestConfig = {
  patches: true,
  steps: [{ v: "a" }, { v: "b" }, { v: "b" }],
};
