import type { TestConfig } from "../../main.test";

// A function value's body reads classify too: the child may invoke it at
// render time, so a skipped render could hide the server read.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
