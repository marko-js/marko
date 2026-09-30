import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  skip_html: true, // TODO: it is broken.
  steps: [{}, click("button"), click("button"), click("button")],
};
