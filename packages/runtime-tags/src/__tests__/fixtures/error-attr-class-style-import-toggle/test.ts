import type { TestConfig } from "../../main.test";

// Two style import reads resolving to one class name meet in a combination the server's
// class table writes as the module loads; the client does not check.
export const config: TestConfig = {
  error_html: true,
  skip_optimize: true,
};
