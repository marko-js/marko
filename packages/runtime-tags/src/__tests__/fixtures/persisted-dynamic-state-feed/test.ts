import type { TestConfig } from "../../main.test";

// Client state feeding a dynamic tag stays closed: an unanalyzable renderer
// has no per-group ownership mask to derive.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
