import type { TestConfig } from "../../main.test";

// patch-let-client-assigned without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }],
};
