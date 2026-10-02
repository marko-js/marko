import type { TestConfig } from "../../main.test";

// The page's entry script goes out apart from the lazy tag's, so the `@catch`
// that replaces its body keeps it, and the effect after the try runs.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
};
