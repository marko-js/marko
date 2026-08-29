import type { TestConfig } from "../../main.test";

// A DESTRUCTURED tag variable hangs its bindings on the pattern's
// identifiers: an assignment to any of them still fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
