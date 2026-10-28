import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-branch-dynamic-tag-name without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "a" }],
};
