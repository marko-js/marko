import type { TestConfig } from "../../main.test";

// A hole mixing a param with `$global` cannot survive a withheld capture,
// so that param must stay server-owned: feeding it client state rejects.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
