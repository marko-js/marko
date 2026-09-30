import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

// Resume leaves the button inert until the in-order await completes; client
// rendering makes it live as soon as it renders.
export const config: TestConfig = {
  // Resume holds the button inert until the in-order await completes, so the
  // first click is lost.
  skip_settled: true,
  equivalent: false,
  steps: [{}, flush, wait, click("button"), flush, wait, click("button"), wait],
};
