import type { TestConfig } from "../../main.test";

// A handler capturing a `$global`-derived value inside client-owned
// structure: frames refresh the globals bag, never derived slots, so
// the capture would go stale.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
