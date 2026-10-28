import type { TestConfig } from "../../main.test";

// patch-unassigned-let-branch-hole-unregistered-assign without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }],
};
