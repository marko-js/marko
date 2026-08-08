import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  error_html: true,
  skip_csr: true,
  skip_optimize: true,
  steps: [{ value: "x", valueChange: () => {} }],
};
