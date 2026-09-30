import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  equivalent: false,
  steps: [{ a: 2 }, click("button"), { a: 3 }, click("button")],
};
