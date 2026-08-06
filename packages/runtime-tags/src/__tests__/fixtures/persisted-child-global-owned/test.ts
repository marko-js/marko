import type { TestConfig } from "../../main.test";

// A client-owned candidate whose template chain reads `$global` rejects:
// the skipped render could hide a global change.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
