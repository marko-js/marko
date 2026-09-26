import type { TestConfig } from "../../main.test";

// A getter that throws while lazy content in a `<try>` serializes aborts the
// whole render rather than firing the `@catch`.
export const config: TestConfig = {
  error_html: true,
  skip_csr: true,
};
