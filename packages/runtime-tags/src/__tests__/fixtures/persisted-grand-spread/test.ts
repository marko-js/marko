import type { TestConfig } from "../../main.test";

// A middle template spreading input to a nested child rejects at the
// root call site (and the middle's own compile rejects the spread too).
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
