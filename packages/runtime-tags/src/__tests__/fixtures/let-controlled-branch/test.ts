import type { TestConfig } from "../../main.test";

// patch-let-controlled-branch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a" }],
};
