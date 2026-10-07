import type { TestConfig } from "../../main.test";

// A lazily loaded tag has no value until its module loads, so a tag variable on
// one is an error.
export const config: TestConfig = {
  error_compiler: true,
};
