import type { TestConfig } from "../../main.test";

// An ASSIGNED tag variable needs the change-binding chain serialized
// under persisted; until that lands, the call site fails closed.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
