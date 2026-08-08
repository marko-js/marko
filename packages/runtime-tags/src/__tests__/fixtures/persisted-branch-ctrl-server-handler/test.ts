import type { TestConfig } from "../../main.test";

// The same unbound-factory hazard on a native control fed directly:
// the change handler's provenance, not its shape, is what rejects.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
