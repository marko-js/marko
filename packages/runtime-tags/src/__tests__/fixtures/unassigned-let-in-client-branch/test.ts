import type { TestConfig } from "../../main.test";

// patch-unassigned-let-in-client-branch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }],
};
