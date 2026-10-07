import type { TestConfig } from "../../main.test";

// A debug build throws once a dynamic tag's variable is over a lazily loaded
// template, which the compiler cannot see.
export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
};
