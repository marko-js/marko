import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-branch-hole-unregistered-assign without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "b" }],
};
