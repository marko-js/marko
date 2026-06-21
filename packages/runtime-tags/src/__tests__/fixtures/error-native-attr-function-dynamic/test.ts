import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
  steps: [{ handler: () => {} }],
};
