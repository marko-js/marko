import type { TestConfig } from "../../main.test";

// patch-client-let-fn-data-string without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
  ],
};
