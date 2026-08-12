import type { TestConfig } from "../../main.test";

// A catch-only `<try>` (no `<await>`) whose body patches a server value: boundaries fail closed at compile regardless of async content.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
