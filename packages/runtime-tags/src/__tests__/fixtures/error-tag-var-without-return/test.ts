import type { TestConfig } from "../../main.test";

// A tag variable is the value its tag's content `<return>`s, so one over a
// template or `<define>` without a `<return>` is an error.
export const config: TestConfig = {
  error_compiler: true,
};
