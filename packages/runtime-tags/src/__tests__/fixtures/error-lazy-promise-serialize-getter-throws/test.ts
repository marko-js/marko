import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A promise settling with a value that throws while its lazy content's ready
// data serializes aborts the render with that error.
export const config: TestConfig = {
  steps: [{}, wait],
  error_html: true,
  skip_csr: true,
};
