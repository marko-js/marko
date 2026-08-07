import type { TestConfig } from "../../main.test";

// A `$global` hole inside client-owned structure has no delivery channel:
// its capture would ride the branch body patch renders skip.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
