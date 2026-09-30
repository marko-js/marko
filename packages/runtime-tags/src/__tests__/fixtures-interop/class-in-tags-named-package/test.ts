import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// The `tags` directory here is its own package root, so templates inside it
// are not "within a tags directory" and may stay Class API.
export const config: TestConfig = {
  steps: [{}, click("button")],
};
