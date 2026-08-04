import type { TestConfig } from "../../main.test";

// An alias of a server value is not a canonical binding, so it cannot fill
// (no ordinal, no server write); an effect reading it is rejected rather
// than going silently stale.
export const config: TestConfig = {
  persisted: true,
  error_compiler: true,
};
