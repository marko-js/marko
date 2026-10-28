import type { TestConfig } from "../../main.test";

// patch-unassigned-let-in-created-branch-join without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false, v: "a", w: "1" }],
};
