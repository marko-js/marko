import type { TestConfig } from "../../main.test";

// A `$global`-derived value never re-ships, so reading it inside `<@catch>`
// content on an interactive page stays closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
