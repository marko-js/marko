import type { TestConfig } from "../../main.test";

// A const rename of an input property is an alias: aliases never promote
// to fills, so the mixed selector fails closed (read `input.min` inline).
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
