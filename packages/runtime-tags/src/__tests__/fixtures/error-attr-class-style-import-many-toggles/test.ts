import type { TestConfig } from "../../main.test";

// Past the toggles a class table indexes, the server checks the class as it writes it.
export const config: TestConfig = {
  error_html: true,
  skip_optimize: true,
  steps: [{ on: true }],
};
