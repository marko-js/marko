import type { TestConfig } from "../../main.test";

// A tag name that may be its own template, which is still analyzing, resolves
// to no known template, whatever else it may be.
export const config: TestConfig = {
  steps: [{}],
};
