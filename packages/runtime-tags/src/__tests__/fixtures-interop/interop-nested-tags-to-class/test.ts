import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("#tags"),
    click("#class"),
    click("#tags"),
    click("#class"),
    click("#tags"),
  ],
};
