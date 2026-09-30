import type { TestConfig } from "../../../main.test";
import { wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

// Two independent load tags load concurrently; both should render correctly
// and keep in sync with the shared reactive value after load.
export const config: TestConfig = {
  steps: [{}, wait, click("button")],
  equivalent: false,
};
