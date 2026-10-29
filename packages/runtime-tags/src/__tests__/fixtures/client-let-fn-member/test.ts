import type { TestConfig } from "../../main.test";

// patch-client-let-fn-member without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: false },
  ],
};
