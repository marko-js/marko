import type { TestConfig } from "../../main.test";

// A server-driven loop nested inside a client-owned loop has no frame
// channel to speak through: fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
