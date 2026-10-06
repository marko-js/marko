import type { TestConfig } from "../../main.test";

// A recursive call's `<return>` is checked once the whole body is analyzed.
export const config: TestConfig = {
  error_compiler: true,
};
