import type { TestConfig } from "../../main.test";

// Assigning a grandchild's tag variable needs the `_var_change` chain the
// instance memo cannot vouch for: the call site fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
