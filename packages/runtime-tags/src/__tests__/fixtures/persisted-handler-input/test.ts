import type { TestConfig } from "../../main.test";

// A handler capturing server input would read it stale after any patch
// (captures never re-ship as fills), so it is rejected.
export const config: TestConfig = {
  persisted: true,
  error_compiler: true,
};
