import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// Same as interop-self-interactive-tags-to-class but the Class API child is a
// split component (browser logic in component-browser.js), like ebay-button.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click("#class-api"), click("#class-api")],
};
