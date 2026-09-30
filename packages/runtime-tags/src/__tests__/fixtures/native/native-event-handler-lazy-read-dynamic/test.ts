import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

export const config: TestConfig = {
  steps: [
    {},
    click(".bump"),
    click(".act"),
    click(".toggle"),
    click(".act"),
    click(".toggle"),
    click(".act"),
  ],
};
