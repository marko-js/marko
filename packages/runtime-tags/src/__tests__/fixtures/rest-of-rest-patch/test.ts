import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// Chained rest grains pass the walk through two property-less links:
// updates reach the deep read client-side.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button")],
};
