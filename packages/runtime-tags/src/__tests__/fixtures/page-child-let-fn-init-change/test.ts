import type { TestConfig } from "../../main.test";

// patch-page-child-let-fn-init-change without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: false, more: false, label: "c" },
    { alt: true, more: true, label: "d" },
  ],
};
