import type { TestConfig } from "../../main.test";

// An `<await>` still pending at patch flush time (the multi-frame case): the compile gate rejects it before the single-frame fence could be reached at runtime.
export const config: TestConfig = {
  error_compiler: true,
  persisted: true,
};
