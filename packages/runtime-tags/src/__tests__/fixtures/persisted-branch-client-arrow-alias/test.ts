import type { TestConfig } from "../../main.test";

// Aliasing does not launder a server-created function: only a function
// expression declared in the region recomputes client-side.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
