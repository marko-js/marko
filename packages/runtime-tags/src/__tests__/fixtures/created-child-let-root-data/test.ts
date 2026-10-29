import type { TestConfig } from "../../main.test";

// patch-created-child-let-root-data without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, more: true, label: "a" },
    { show: true, more: true, label: "b" },
    { show: true, more: false, label: "c" },
    { show: true, more: true, label: "d" },
  ],
};
