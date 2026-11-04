import type { TestConfig } from "../../main.test";

// The plain twin of `patch-caught-try-row`: the document main renders.
export const config: TestConfig = {
  steps: [{ rows: [{ key: 1, fail: true }] }],
};
