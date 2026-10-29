import type { TestConfig } from "../../main.test";

// patch-client-let-fn-data without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", more: false, n: 1, items: ["x"] },
    { label: "b", more: true, n: 2, items: ["z", "x"] },
    { label: "c", more: false, n: 3, items: ["x"] },
  ],
};
