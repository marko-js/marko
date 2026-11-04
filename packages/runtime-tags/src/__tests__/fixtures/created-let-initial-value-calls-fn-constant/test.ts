import type { TestConfig } from "../../main.test";

// patch-created-let-initial-value-calls-fn-constant without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, w: "1" },
    { show: true, w: "2" },
    { show: true, w: "3" },
  ],
};
