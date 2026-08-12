import type { TestConfig } from "../../main.test";

// Nested `<try>` boundaries around an `<await>`: the outer boundary fails closed at compile.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
