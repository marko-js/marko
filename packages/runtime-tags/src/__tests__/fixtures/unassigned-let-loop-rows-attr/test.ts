import type { TestConfig } from "../../main.test";

// patch-unassigned-let-loop-rows-attr without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", items: [1] }],
};
