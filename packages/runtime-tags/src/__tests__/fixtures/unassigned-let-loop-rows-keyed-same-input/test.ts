import type { TestConfig } from "../../main.test";

// patch-unassigned-let-loop-rows-keyed-same-input without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", items: [1] }],
};
