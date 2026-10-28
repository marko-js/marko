import type { TestConfig } from "../../main.test";

// patch-unassigned-let-in-created-branch-dynamic-tag without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
  ],
};
