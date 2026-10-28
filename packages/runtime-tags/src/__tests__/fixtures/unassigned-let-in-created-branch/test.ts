import type { TestConfig } from "../../main.test";

// patch-unassigned-let-in-created-branch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "b" }],
};
