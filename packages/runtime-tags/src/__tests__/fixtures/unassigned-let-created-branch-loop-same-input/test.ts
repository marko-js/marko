import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-branch-loop-same-input without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, items: [1] }],
};
