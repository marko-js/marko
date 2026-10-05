import type { TestConfig } from "../../main.test";

// Two style import reads resolving to one class name are only known as they
// render, so debug builds throw where the toggle could drop the other's name.
export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
};
