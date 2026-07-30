import type { TestConfig } from "../../main";

// A controlled `<select value=NaN>` selects the `NaN` option (not the empty one),
// identically under SSR and CSR.
export const config: TestConfig = {
  steps: [{}],
};
