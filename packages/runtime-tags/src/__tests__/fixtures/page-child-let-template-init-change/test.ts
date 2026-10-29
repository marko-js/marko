import type { TestConfig } from "../../main.test";

// patch-page-child-let-template-init-change without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { big: false, more: false, label: "a" },
    { big: false, more: true, label: "b" },
    { big: false, more: false, label: "c" },
    { big: true, more: true, label: "d" },
  ],
};
