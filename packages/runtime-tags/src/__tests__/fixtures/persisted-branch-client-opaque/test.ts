import type { TestConfig } from "../../main.test";

// A source-free untracked call inside client-owned structure: nothing
// recomputes it client-side and nothing ships it, so it fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
