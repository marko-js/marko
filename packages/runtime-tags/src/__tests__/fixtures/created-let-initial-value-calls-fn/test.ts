import type { TestConfig } from "../../main.test";

// patch-created-let-initial-value-calls-fn without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    { show: true, v: "a", w: "3" },
  ],
};
