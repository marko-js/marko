import type { TestConfig } from "../../main.test";

// patch-unassigned-let-created-placeholder without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false, v: "a" }],
};
