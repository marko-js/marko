import type { TestConfig } from "../../main.test";

// patch-client-let-fn-closure-mixed-read without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", more: false },
    { label: "b", more: true },
  ],
};
