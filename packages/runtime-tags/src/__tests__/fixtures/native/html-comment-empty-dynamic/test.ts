import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  // The server pads an empty resumable comment with a space so its resume
  // marker can claim it.
  skip_settled: true,
  equivalent: false,
  steps: [{}, click("button")],
};
