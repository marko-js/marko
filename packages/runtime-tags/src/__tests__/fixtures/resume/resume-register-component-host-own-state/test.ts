import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{ card: true }, click("#toggle"), click("#toggle")],
};
