import type { TestConfig } from "../../main.test";

// A call in a mixed loop input re-runs on every fill write with no
// stable client value: fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
