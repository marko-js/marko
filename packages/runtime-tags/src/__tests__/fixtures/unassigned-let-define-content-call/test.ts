import type { TestConfig } from "../../main.test";

// patch-unassigned-let-define-content-call without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: true, v: "a", w: "1", items: ["a", "b"] }],
};
