import type { TestConfig } from "../../main.test";

// An `<await>` inside a diverging server-driven branch (the construct case): fails closed at compile.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
