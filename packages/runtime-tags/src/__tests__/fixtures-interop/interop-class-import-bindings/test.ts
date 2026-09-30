import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("#named-tags"),
    click("#class"),
    click("#direct"),
    click("#named-tags"),
    click("#class"),
  ],
};
