import type { TestConfig } from "../../main.test";

// An unserializable value in lazy content inside a `<try>` aborts the whole
// render rather than firing the `@catch`; only debug builds detect it.
export const config: TestConfig = {
  error_html: true,
  skip_csr: true,
  skip_optimize: true,
};
