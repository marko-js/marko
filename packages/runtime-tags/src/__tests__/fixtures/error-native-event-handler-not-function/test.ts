import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  error_dom: true,
  skip_optimize: true,
  skip_ssr: true,
  steps: [{ onClick: 5 }],
};
