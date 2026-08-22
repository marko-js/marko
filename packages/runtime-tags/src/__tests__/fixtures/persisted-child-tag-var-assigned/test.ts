import type { TestConfig } from "../../main.test";

// The `_var_change` write-back for an assigned tag variable is not wired
// for a pure client instance yet: fail closed at the call site.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
