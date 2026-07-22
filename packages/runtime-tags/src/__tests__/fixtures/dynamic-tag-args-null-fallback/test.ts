import type { TestConfig } from "../../main.test";

// A null dynamic-tag renderer with positional args must still render its
// fallback body on SSR, matching CSR.
export const config: TestConfig = {
  steps: [{}],
};
