import type { TestConfig } from "../../main.test";

// Attribute tags have per-name channels the region checks cannot see
// through yet: fail closed at the call site.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
