import type { TestConfig } from "../../main.test";

// patch-unassigned-let-text-only without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { v: "a", w: "1" },
    { v: "b", w: "2" },
  ],
};
