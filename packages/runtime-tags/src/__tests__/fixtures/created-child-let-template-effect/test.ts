import type { TestConfig } from "../../main.test";

// patch-created-child-let-template-effect without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
