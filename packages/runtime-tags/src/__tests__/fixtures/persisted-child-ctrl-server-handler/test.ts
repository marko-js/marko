import type { TestConfig } from "../../main.test";

// A server-derived change handler would arrive as an unbound registry
// factory after a patch (skipped regions emit no bind): fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
