import type { TestConfig } from "../../main.test";

// An `<await>` that rejects into an enclosing `<try>` catch during a patch render: fails closed at compile.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
