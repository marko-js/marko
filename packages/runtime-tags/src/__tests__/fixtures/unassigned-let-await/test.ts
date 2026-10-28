import type { TestConfig } from "../../main.test";

// patch-unassigned-let-await without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }],
};
