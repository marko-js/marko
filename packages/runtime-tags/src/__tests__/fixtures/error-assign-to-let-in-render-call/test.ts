import type { TestConfig } from "../../main.test";

// The server has no check: its write is a plain assignment, rendered as is.
export const config: TestConfig = {
  error_dom: true,
  skip_optimize: true,
};
