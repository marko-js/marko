import type { TestConfig } from "../../main.test";

// patch-capture-branch-const without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, v: "a" },
    { show: true, v: "b" },
    { show: true, v: "b" },
  ],
};
