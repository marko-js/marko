import type { TestConfig } from "../../main.test";
import { click } from "../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click("#increment"),
    click("#toggle"),
    click("#increment"),
    click("#toggle"),
  ],
};
