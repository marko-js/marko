import type { TestConfig } from "../../main.test";

// A `$global`-derived feed never re-ships, so it fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
