import type { TestConfig } from "../../main.test";

// patch-created-child-let-fn-switch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { show: false, alt: false, more: false, label: "initial" },
    { show: true, alt: false, more: false, label: "a" },
    { show: true, alt: false, more: true, label: "b" },
    { show: true, alt: false, more: false, label: "c" },
    { show: true, alt: true, more: true, label: "d" },
  ],
};
