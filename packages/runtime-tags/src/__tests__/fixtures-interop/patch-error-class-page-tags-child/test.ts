import type { TestConfig } from "../../main.test";

// A class API page rendering a tags API child is a compile error with `patches`.
export const config: TestConfig = {
  patches: true,
  error_compiler: true,
};
