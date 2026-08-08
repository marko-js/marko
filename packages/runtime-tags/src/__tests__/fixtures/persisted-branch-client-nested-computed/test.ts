import type { TestConfig } from "../../main.test";

// A computed input read cannot deliver as a fill, so it cannot select
// structure nested in client-owned structure: the error names the rule.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
