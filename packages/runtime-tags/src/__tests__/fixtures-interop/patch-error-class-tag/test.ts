import type { TestConfig } from "../../main.test";

// A class API tag in a template compiled with `patches` is a compile error.
export const config: TestConfig = {
  patches: true,
  error_compiler: true,
};
