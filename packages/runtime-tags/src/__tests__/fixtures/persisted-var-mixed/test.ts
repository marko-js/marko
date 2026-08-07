import type { TestConfig } from "../../main.test";

// Mixed provenance collapses to state downstream (the server half would
// never refresh): the call site fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
