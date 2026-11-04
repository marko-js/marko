import type { TestConfig } from "../../main.test";

// A class API page is a compile error with `patches`: it has no patch render.
export const config: TestConfig = {
  patches: true,
  error_compiler: true,
};
