import type { TestConfig } from "../../main.test";

// A void controlled value must select the `value=""` option on both SSR and
// CSR (equivalence), not diverge (SSR auto-first vs CSR empty option).
export const config: TestConfig = {
  steps: [{}],
};
