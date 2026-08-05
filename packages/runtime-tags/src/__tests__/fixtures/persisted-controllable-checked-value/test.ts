import type { TestConfig } from "../../main.test";

// Stays fail-closed: the wire cannot yet express this control faithfully.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
