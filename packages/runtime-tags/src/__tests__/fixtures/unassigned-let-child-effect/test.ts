import type { TestConfig } from "../../main.test";

// patch-unassigned-let-child-effect without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }],
};
