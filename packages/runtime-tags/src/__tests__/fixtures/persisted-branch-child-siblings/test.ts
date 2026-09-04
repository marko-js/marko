import type { TestConfig } from "../../main.test";

// Two sites of one child template in a branch are siblings, not a cycle.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: false }, { show: true }, { show: false }],
};
