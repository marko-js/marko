import type { TestConfig } from "../../../main.test";
import { flush, wait } from "../../../utils/resolve";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [{ value: 1 }, wait, flush, wait, click("button"), wait],
  equivalent: false,
};
