import type { TestConfig } from "../../main.test";

// A JSON body is not JavaScript, so the error names the tag that writes it as is.
export const config: TestConfig = {
  error_compiler: true,
};
