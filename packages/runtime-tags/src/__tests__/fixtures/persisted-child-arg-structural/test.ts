import type { TestConfig } from "../../main.test";

// A provenance-free ARGUMENT gating a child's structural param has no
// delivery channel, exactly like the named-attribute form.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
