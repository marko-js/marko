import type { TestConfig } from "../../main.test";

// The plainest constant-test chain (a static body, nothing nested): a
// construct still needs its branch entry to render the body.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: false }, { show: true }, { show: false }, { show: true }],
};
