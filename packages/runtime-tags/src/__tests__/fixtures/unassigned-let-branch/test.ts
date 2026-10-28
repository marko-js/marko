import type { TestConfig } from "../../main.test";

// patch-unassigned-let-branch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, w: "1" },
    { show: false, w: "2" },
  ],
};
