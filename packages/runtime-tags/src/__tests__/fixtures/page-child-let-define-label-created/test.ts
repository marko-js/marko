import type { TestConfig } from "../../main.test";

// patch-page-child-let-define-label-created without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, more: true, label: "a" },
    { show: true, more: true, label: "b" },
    { show: true, more: true, label: "c" },
  ],
};
