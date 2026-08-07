import type { TestConfig } from "../../main.test";

// An inner list whose `<let>` is never assigned is not client state, so
// it cannot nest inside the client-owned outer: the error names why.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
