import type { TestConfig } from "../../main.test";

// A renderer read directly inside client-owned structure would need to
// cross the wire as a function: no channel, fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
