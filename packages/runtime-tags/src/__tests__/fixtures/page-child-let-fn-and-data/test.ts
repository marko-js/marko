import type { TestConfig } from "../../main.test";

// patch-page-child-let-fn-and-data without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
    { label: "c", n: 2 },
  ],
};
