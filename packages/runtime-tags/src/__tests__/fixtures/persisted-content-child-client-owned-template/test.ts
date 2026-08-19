import type { TestConfig } from "../../main.test";

// A template renderer (not the tag's body) fed to a child rendering it inside
// its own client-owned structure fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
