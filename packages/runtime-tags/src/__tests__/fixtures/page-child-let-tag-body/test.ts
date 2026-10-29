import type { TestConfig } from "../../main.test";

// patch-page-child-let-tag-body without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: false, more: true, label: "c" },
  ],
};
