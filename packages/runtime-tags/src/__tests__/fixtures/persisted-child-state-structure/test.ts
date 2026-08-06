import type { TestConfig } from "../../main.test";

// A param driving the child's branch structure must stay server-owned: a
// stale selection would corrupt the wire, so a client state feed rejects.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
