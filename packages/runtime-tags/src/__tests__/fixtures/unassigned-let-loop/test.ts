import type { TestConfig } from "../../main.test";

// patch-unassigned-let-loop without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ items: [1], w: "a" }],
};
