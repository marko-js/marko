import type { TestConfig } from "../../main.test";

// patch-created-child-let-content-and-data without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, n: 1, more: true },
    { show: true, n: 2, more: true },
    { show: true, n: 3, more: false },
    { show: true, n: 4, more: true },
  ],
};
