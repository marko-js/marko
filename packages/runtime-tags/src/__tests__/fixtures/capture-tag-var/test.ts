import type { TestConfig } from "../../main.test";

// patch-capture-tag-var without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a" }, { v: "b" }, { v: "b" }],
};
