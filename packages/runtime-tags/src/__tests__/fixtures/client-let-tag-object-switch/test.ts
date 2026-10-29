import type { TestConfig } from "../../main.test";

// patch-client-let-tag-object-switch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { alt: false, label: "a" },
    { alt: true, label: "b" },
  ],
};
