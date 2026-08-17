import type { TestConfig } from "../../main.test";

// An inert call re-rolls on every fill write of a mixed selector, so
// the selection flips without any input or state change: fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
