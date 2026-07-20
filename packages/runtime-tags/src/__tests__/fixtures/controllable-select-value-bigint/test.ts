import type { TestConfig } from "../../main.test";

// A controlled `<select value=0n>` selects the `0` option (not the empty one),
// identically under SSR and CSR.
export const config: TestConfig = {
  steps: [{}],
};
