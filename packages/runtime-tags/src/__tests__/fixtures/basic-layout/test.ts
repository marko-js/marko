import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{ name: "World" }],
  skip_csr: true,
  skip_resume: false,
};
