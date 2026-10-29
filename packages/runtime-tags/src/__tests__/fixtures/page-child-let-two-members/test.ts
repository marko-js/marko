import type { TestConfig } from "../../main.test";

// patch-page-child-let-two-members without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: true },
  ],
};
