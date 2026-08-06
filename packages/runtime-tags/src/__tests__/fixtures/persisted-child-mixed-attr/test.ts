import type { TestConfig } from "../../main.test";

// A tag mixing a server-fed attr with a client-state-fed attr cannot
// patch faithfully yet: the child render would be part stale, part live.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
