import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-branch-hole without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "c" },
  ],
};
