import type { TestConfig } from "../../main.test";

// patch-created-define-setup-content-owner without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    { show: true, label: "d" },
  ],
};
