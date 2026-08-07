import type { TestConfig } from "../../main.test";

// A test mixing `$global` with client state: the global side excludes
// client ownership, and neither side may own the selection.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
