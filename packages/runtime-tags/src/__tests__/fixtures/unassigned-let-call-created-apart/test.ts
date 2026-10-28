import type { TestConfig } from "../../main.test";

// patch-unassigned-let-call-created-apart without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "b" }],
};
