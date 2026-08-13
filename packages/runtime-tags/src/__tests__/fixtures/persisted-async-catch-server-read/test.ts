import type { TestConfig } from "../../main.test";

// Request/input reads inside `<@catch>` would go stale after later patches.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
