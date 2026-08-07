import type { TestConfig } from "../../main.test";

// A call in a mixed selector re-runs on every fill write with no stable
// client value (and a server function would re-bind stale): fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
