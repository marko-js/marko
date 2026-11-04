import type { TestConfig } from "../../main.test";

// A template with no tags API feature outside a `tags/` directory reads as class API, a compile error with `patches`.
export const config: TestConfig = {
  patches: true,
  error_compiler: true,
};
