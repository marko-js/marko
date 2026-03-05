import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ show: true, dynamic: "div" }],
  skip_csr: true,
  skip_ssr: true,
};
