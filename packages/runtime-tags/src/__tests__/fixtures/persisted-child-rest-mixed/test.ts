import type { TestConfig } from "../../main.test";

// Rest-consumed children classify through the tag's merged extra, so
// state+server mixing rejects on this path too.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
