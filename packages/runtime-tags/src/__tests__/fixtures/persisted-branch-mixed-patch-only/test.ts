import type { TestConfig } from "../../main.test";

// Patches alone drive a mixed selector: with no client interaction the
// fill write must still re-select on the hydrated (or resumed) page.
export const config: TestConfig = {
  persisted: true,
  steps: [{ min: 5 }, { min: 0 }],
};
