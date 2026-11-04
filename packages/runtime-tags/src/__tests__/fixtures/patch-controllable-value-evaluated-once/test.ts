import type { TestConfig } from "../../main.test";

// The render and the patch control entry share one evaluation of the value,
// which the server's paragraph counts (a client render shows it before the read).
export const config: TestConfig = {
  patches: true,
  compare_defaults: true,
  skip_csr: true,
  steps: [{ value: "first" }, { value: "second" }],
};
