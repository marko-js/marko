import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// A dynamically named tag with a controlled attr but no change handler: the
// render pass still has to claim `value`, so the page must enable that kind.
export const config: TestConfig = {
  steps: [{}, click("button")],
};
