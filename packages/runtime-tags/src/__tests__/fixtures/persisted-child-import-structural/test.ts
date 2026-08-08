import type { TestConfig } from "../../main.test";

// A provenance-free feed (an imported mutable binding) is not constant:
// it still gates a structural group, so the call site fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
