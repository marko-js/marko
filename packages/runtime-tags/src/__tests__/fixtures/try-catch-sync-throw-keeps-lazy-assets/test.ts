import type { TestConfig } from "../../main.test";

// A lazy tag writes the page's entry script with its own; the `@catch` that
// replaces its body keeps them, so the effect after the try runs.
export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
};
