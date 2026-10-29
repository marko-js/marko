import type { TestConfig } from "../../main.test";

// patch-client-let-fn-capture without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { prefix: "old-", label: "a" },
    { prefix: "new-", label: "b" },
  ],
};
