import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// Only the interactive leaf is linked by the page entry; the inert root and
// layout stay out of the client bundle.
export const config: TestConfig = {
  steps: [{}, click(".counter")],
};
