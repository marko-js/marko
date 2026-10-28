import type { TestConfig } from "../../main.test";

// patch-let-controlled-created-hole without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "a" }],
};
