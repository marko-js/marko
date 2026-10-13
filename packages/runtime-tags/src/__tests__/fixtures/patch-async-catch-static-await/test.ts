import type { TestConfig } from "../../main.test";
export const config: TestConfig = {
  patches: true,
  skip_csr: true,
  steps: () => [{ label: "a" }, { label: "b" }],
};
