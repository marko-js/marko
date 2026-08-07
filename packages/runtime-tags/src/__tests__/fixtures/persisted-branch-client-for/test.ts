import type { TestConfig } from "../../main.test";

// A loop nested under client-owned structure: server-owned membership has
// no frame channel to speak through there.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
