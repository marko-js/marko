import type { TestConfig } from "../../main.test";

// patch-page-child-let-content-and-data without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { n: 1, more: false },
    { n: 1, more: true },
    { n: 1, more: false },
    { n: 2, more: true },
  ],
};
