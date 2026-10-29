import type { TestConfig } from "../../main.test";

// patch-unassigned-let-define-await-row-branch without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "a", w: "1", items: ["a", "b"] }],
};
