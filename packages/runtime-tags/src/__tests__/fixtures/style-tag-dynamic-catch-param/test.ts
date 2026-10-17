import type { TestConfig } from "../../main.test";

// An `@catch` body gets its error after its setup writes the shell.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }],
};
