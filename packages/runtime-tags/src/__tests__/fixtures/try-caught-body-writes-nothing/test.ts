import type { TestConfig } from "../../main.test";

// The plain twin of `patch-try-caught-body-writes-nothing`: the document main
// renders.
export const config: TestConfig = {
  steps: [{ boom: true }],
};
