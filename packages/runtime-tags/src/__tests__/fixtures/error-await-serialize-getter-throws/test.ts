import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A getter that throws while `<await>` content serializes aborts the render
// with its own error, rather than escaping the flush that runs it.
export const config: TestConfig = {
  steps: [{}, wait],
  error_html: true,
  skip_csr: true,
};
