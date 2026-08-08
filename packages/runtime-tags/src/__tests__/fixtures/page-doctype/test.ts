import type { TestConfig } from "../../main.test";

// A full-document template cannot client-mount into a body.
export const config: TestConfig = {
  skip_csr: true,
};
