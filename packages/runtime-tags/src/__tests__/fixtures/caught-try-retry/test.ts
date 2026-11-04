import type { TestConfig } from "../../main.test";

// The plain twin of `patch-caught-try-retry`: the document main renders.
export const config: TestConfig = {
  steps: [{ show: true, fail: true }],
};
