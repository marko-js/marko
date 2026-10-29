import type { TestConfig } from "../../main.test";

// patch-page-child-let-template-switch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: true, big: false, label: "a" },
    { show: true, big: false, label: "b" },
    { show: true, big: true, label: "c" },
  ],
};
