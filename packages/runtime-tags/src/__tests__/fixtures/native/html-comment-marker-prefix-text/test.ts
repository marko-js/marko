import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// The comments spell the button text's resume comment (debug and optimized
// accessors); SSR escapes them, and snapshots hide CSR's marker-shaped ones.
export const config: TestConfig = {
  // The server escapes comment text that looks like a resume marker.
  skip_settled: true,
  steps: [{}, click("button"), click("button")],
  equivalent: false,
};
