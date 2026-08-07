import type { TestConfig } from "../../main.test";

// A `by` keyer derived from server input would read stale inside a
// client-owned loop: fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
