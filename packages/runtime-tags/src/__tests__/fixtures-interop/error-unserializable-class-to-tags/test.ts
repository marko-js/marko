import type { TestConfig } from "../../main.test";

// Nested functions in object attr values are not resumed across the class→tags
// boundary; the flush aborts as unserializable. Optimize drops the value.
export const config: TestConfig = {
  error_html: true,
  skip_optimize: true,
};
