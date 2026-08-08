import type { TestConfig } from "../../main.test";

// A client arrow may RETURN a server function: invoking that result is
// still a server-derived call, so the computed callee stays rejected.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
