import type { TestConfig } from "../../main.test";

// patch-page-child-let-define-label-script without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: true, label: "c" },
  ],
};
