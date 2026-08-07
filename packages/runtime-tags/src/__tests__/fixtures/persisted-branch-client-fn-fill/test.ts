import type { TestConfig } from "../../main.test";

// A server-derived function called inside client-owned structure: the
// shipped function re-binds to the live scope, so the server values its
// body captures would read stale slots forever.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
