import type { TestConfig } from "../../main.test";

// A handler capturing a `$global`-derived value inside client-owned
// structure would go stale: frames refresh the bag, never derived slots.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
