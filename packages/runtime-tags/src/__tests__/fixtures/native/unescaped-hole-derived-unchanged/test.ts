import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

// The second click leaves both the `<const>` and the inline expression equal,
// so their markup stays in place.
export const config: TestConfig = {
  steps: [{}, click("button"), click("button")],
};
