import type { TestConfig } from "../../main.test";

// An effect a patch re-runs (its read changed) assigns state: the page shows
// the new value.
export const config: TestConfig = {
  persisted: true,
  steps: [{ label: "a" }, { label: "b" }],
};
