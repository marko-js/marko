import type { TestConfig } from "../../main.test";

// A whole-`input` attr read inside client-owned structure has no fill
// grain: fail closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
