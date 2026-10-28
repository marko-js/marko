import type { TestConfig } from "../../main.test";

// patch-unassigned-let-dynamic-tag-name without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }],
};
