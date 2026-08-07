import type { TestConfig } from "../../main.test";

// A server-derived function called inside client-owned structure re-binds
// to the live scope, so its captured server values would read stale.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
