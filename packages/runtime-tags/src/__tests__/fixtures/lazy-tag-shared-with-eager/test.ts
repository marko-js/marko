import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  // The steps never fire the `visible` trigger, so only the server renders the
  // lazy content.
  skip_settled: true,
  steps: [{}, click("section .shared")],
  equivalent: false,
};
