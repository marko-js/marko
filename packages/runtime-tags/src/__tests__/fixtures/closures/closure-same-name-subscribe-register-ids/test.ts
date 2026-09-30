import type { TestConfig } from "../../../main.test";
import { after } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, after(1), click("button.x")],
};
