import type { TestConfig } from "../../main.test";

// A handler reading a branch-local server derivation: the local has no
// owner slot the wire keeps current, so it fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
