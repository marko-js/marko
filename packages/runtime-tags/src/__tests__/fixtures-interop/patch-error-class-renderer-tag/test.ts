import type { TestConfig } from "../../main.test";

// A legacy taglib `renderer` tag is a compile error with `patches`.
export const config: TestConfig = {
  patches: true,
  error_compiler: true,
};
