import type { TestConfig } from "../../main.test";

// Server-owned structure nested under client-owned structure: the frame
// has no channel to speak the inner selection through.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
