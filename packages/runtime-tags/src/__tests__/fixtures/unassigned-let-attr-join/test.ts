import type { TestConfig } from "../../main.test";

// patch-unassigned-let-attr-join without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ v: "a", w: "1" }],
};
