import type { TestConfig } from "../../main.test";

// A global-derived return never re-ships for the client recompute: the
// call site fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
