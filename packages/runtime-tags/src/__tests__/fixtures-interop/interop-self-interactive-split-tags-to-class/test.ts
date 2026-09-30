import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

// Same as interop-self-interactive-tags-to-class but the Class API child is a
// split component (browser logic in component-browser.js), like ebay-button.
export const config: TestConfig = {
  // Marko 5 writes `data-marko` event attributes only when rendering on the
  // server.
  skip_settled: true,
  equivalent: false,
  steps: [{}, click("#class-api"), click("#class-api")],
};
