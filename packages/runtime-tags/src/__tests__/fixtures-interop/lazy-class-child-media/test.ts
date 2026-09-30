import type { TestConfig } from "../../main.test";
import { flushMedia, wait } from "../../utils/resolve";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [{ value: 1 }, flushMedia, wait, click("#inc")],
  equivalent: false,
};
