import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-branch-tag-var without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "a" }],
};
