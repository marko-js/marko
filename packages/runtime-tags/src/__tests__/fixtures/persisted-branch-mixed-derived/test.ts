import type { TestConfig } from "../../main.test";

// A mixed state-and-server test reaching the chain through a derived
// binding (not an inline expression): still neither side's to own.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
