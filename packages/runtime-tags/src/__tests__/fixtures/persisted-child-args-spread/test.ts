import type { TestConfig } from "../../main.test";

// A spread argument hides which child params it feeds, so per-group
// channel analysis cannot run: fail closed at the call site.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
