import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  // SSR renders RegExp attribute values as their .source (drops flags),
  // CSR stringifies them ("/abc/i").
  equivalent: false,
  steps: [{ re: /abc/i }],
};
