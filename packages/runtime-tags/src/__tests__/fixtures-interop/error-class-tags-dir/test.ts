import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  error_compiler: ["tags/hello.marko"],
  skip_csr: true,
  skip_ssr: true,
  skip_resume: true,
};
