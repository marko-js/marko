import type { TestConfig } from "../../main.test";

// patch-unassigned-let-define-mixed-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a" }],
};
