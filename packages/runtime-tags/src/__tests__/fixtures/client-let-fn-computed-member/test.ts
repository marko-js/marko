import type { TestConfig } from "../../main.test";

// patch-client-let-fn-computed-member without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
  ],
};
